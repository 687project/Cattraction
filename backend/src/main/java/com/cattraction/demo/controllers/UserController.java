package com.cattraction.demo.controllers;

import com.cattraction.demo.domains.User;
import com.cattraction.demo.services.PostService;
import com.cattraction.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/user-profile")
@CrossOrigin("*")
public class UserController {

    private final UserService userService;
    private final PostService postService;

    @Autowired
    public UserController(UserService userService, PostService postService) {
        this.userService = userService;
        this.postService = postService;
    }

    /*@GetMapping("/allUsers")
    public List<User> getUsers(){
        userService.deleteUser("aaa");
        List<User> gan=null;
        return gan;
        //return userService.getallUsers("aaa");
    }*/


    @PostMapping("/login")
    public User Login(@RequestParam Map<String,Object> paramMap) {
        //boolean status;
        //status = userService.signUp("aaa","bbb", "ccc");
        return  userService.getUser(paramMap.get("email").toString());
        //return "hello";
    }

    @PostMapping("/signup") //(consumes = "application/json", produces = "application/json")
    public boolean SignUp(@RequestParam Map<String,Object> paramMap){
        //if(paramMap==null)return "fuck";
        String email = paramMap.get("email").toString();
        String password = paramMap.get("password").toString();
        boolean status =userService.signUp(email,"my", password);
        return status;
    }

    @PostMapping("/newpost")
    @CrossOrigin("*")
    public Map<String, Object> uploadUserProfileImage(
            @RequestParam MultipartFile[] photos,
            @RequestParam String description
//            ,@RequestParam String creater
    ){

        String creater = "aaa";

        List<String> postUrl = new ArrayList<>();
        for(MultipartFile file: photos){
            String url = userService.uploadUserImageToS3Bucket(file);
            if(url.isEmpty()){
                throw new IllegalStateException("Upload fails");
            }
            postUrl.add(url);
        }

        Map<String, Object> metadata = postService.createPost(creater, postUrl, description);

        return metadata;
    }
}
