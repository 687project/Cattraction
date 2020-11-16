package com.cattraction.demo.controllers;

import com.cattraction.demo.domains.User;
import com.cattraction.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.validation.BindingResult;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.Map;
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

    //@GetMapping
    public List<User> getUsers(){
        userService.deleteUser("aaa");
        List<User> gan=null;
        return gan;
        //return userService.getallUsers("aaa");
    }

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

    /*@PostMapping(
            path = "{userProfileId}/image/upload",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void uploadUserProfileImage(@PathVariable("userProfileId") UUID userProfileId,
                                       @RequestParam("file") MultipartFile file){
        userService.uploadUserProfileImage(userProfileId, file);
    }*/
}
