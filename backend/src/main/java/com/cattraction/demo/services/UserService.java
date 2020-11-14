package com.cattraction.demo.services;

import com.cattraction.demo.domains.User;
import com.cattraction.demo.dataAccessObjects.UserDataAccessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    private final UserDataAccessService userDataAccessService;

    @Autowired
    public UserService(UserDataAccessService userDataAccessService) {
        this.userDataAccessService = userDataAccessService;
    }

    public List<User> getUsers(String email){
        return userDataAccessService.getUsers(email);
    }

    private void saveUser(User user){
        userDataAccessService.saveUser(user);
    }

    public boolean signUp(String email, String username, String password){
        User user = new User(UUID.randomUUID(), email, username, password);
        saveUser(user);
        return true;
    }

    public void uploadUserProfileImage(UUID userProfileId, MultipartFile file) {
        // 1.check if image is empty
        // 2.if file is an image
        // 3.the user exists in our db
        // 4.grab some metadata from file if any
        // 5.store the image in s3 and update database (userProfileImageLink) with s3 image link
    }
}
