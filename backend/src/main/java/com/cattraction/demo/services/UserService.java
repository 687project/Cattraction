package com.cattraction.demo.services;

import com.cattraction.demo.AmzonS3.AmazonS3Bucket;
import com.cattraction.demo.domains.User;
import com.cattraction.demo.dataAccessObjects.UserDataAccessService;
import com.cattraction.demo.filestore.FileStore;
import org.apache.http.entity.ContentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
public class UserService {

    private final UserDataAccessService userDataAccessService;
    private final FileStore fileStore;

    @Autowired
    public UserService(UserDataAccessService userDataAccessService, FileStore fileStore) {
        this.userDataAccessService = userDataAccessService;
        this.fileStore = fileStore;
    }

    public List<User> getallUsers(String email){
        return userDataAccessService.getallUsers(email);
    }

    public User getUser(String email){
        return userDataAccessService.getUser(email);
    }

    private void saveUser(User user){
        userDataAccessService.saveUser(user);
    }

    public void deleteUser(String email){
        userDataAccessService.deleteUser(email);
    }

    public boolean signUp(String email, String username, String password){
        boolean status=true;
        User userExists = userDataAccessService.getUser(email);
        if (userExists!=null) status=false;
        else{
          User user = new User(UUID.randomUUID(), email, username, password);
          saveUser(user);
        }

        return status;
    }

    public String uploadUserImageToS3Bucket(MultipartFile file) {
        // 1.check if image is empty
        if(file.isEmpty()){
            throw new IllegalStateException("Cannot upload empty file");
        }
        // 2.if file is an image
        if(!Arrays.asList(ContentType.IMAGE_JPEG.getMimeType(), ContentType.IMAGE_PNG.getMimeType()).contains(file.getContentType())){
            throw new IllegalStateException("Unsupported file type");
        }
        // 3.the user exists in our db
//        User user = userDataAccessService
//                .getAllUsers()
//                .stream()
//                .filter(user1 -> user1.getuserId().equals(userProfileId))
//                .findFirst()
//                .orElseThrow(() -> new IllegalStateException("user not found"));
        // 4.grab some metadata from file if any
        Map<String, String> metadata = new HashMap<>();
        metadata.put("Content-Type", file.getContentType());
        metadata.put("Content-Length", String.valueOf(file.getSize()));
        // 5.store the image in s3 and update database (userProfileImageLink) with s3 image link
        String path = String.format("%s", AmazonS3Bucket.PROFILE_IMAGE.getBucketName());
        String fileUrl = "";
        try {
            fileUrl = fileStore.save(path, file.getName(), Optional.of(metadata),file.getInputStream());
        } catch (IOException e) {
            throw new IllegalStateException(e);
        }

        return fileUrl;
    }
}
