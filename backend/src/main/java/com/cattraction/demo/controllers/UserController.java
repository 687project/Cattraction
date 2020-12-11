package com.cattraction.demo.controllers;

import com.cattraction.demo.domains.User;
import com.cattraction.demo.services.UserService;
import com.cattraction.demo.domains.Post;
import com.cattraction.demo.services.PostService;
import com.cattraction.demo.domains.CatPost;
import com.cattraction.demo.services.CatPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/user-profile")
@CrossOrigin("*")
public class UserController {

    private final UserService userService;
    private final PostService postService;
    private final CatPostService catpostService;

    @Autowired
    public UserController(UserService userService, PostService postService, CatPostService catpostService) {
        this.userService = userService;
        this.postService = postService;
        this.catpostService = catpostService;
    }

    @GetMapping("/allUsers")
    public List<User> getUsers(){
        return userService.getallUsers("user");
    }

    @PostMapping("/myaccount")
    public List<Post> myaccount(@RequestParam Map<String,Object> paramMap){
        String email = paramMap.get("email").toString();
        return postService.getPostbyemail(email);
    }

    @PostMapping("/login")
    public User Login(@RequestParam Map<String,Object> paramMap) {
        return  userService.getUser(paramMap.get("email").toString());
    }

    @PostMapping("/signup")
    public boolean SignUp(@RequestParam Map<String,Object> paramMap){
        String email = paramMap.get("email").toString();
        String password = paramMap.get("password").toString();
        String username = paramMap.get("username").toString();
        boolean status =userService.signUp(email,username, password);
        return status;
    }

}
