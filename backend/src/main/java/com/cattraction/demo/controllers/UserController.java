package com.cattraction.demo.controllers;

import com.cattraction.demo.domains.User;
import com.cattraction.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/user-profile")
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers(){
        return userService.getUsers("aaa");
    }

    //@GetMapping
    public String index() {
        userService.signUp("aaa","bbb", "ccc");
        //return this.Login("www").getId();
        return "hello";
    }

    @PostMapping(
            path = "{userProfileId}/image/upload",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void uploadUserProfileImage(@PathVariable("userProfileId") UUID userProfileId,
                                       @RequestParam("file") MultipartFile file){
        userService.uploadUserProfileImage(userProfileId, file);
    }
}
