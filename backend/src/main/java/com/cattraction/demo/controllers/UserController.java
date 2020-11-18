package com.cattraction.demo.controllers;

import com.cattraction.demo.domains.User;
import com.cattraction.demo.domains.Post;
import com.cattraction.demo.services.PostService;
import com.cattraction.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

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

    @GetMapping("/allUsers")
    public List<User> getUsers(){
        return userService.getallUsers("user");
    }

    @PostMapping("/myaccount")
    public List<Post> myaccount(@RequestParam Map<String,Object> paramMap){
        String email = paramMap.get("email").toString();
        return postService.getPostbyemail(email);
    }

    /*@GetMapping("/allPosts")
    public List<Post> getPosts(){
        return postService.getallPosts("post");
        //return postService.getPostbyemail("af");
    }*/

    /*@GetMapping("/post")
    public Post getPost(){//@RequestParam String id
        return postService.getPosts("9E4D3367-EDFD-37C0-9FB6-57A6972371A1");
        //return postService.getPostbyemail("af");
    }*/

    @PostMapping("/recommendation")
    public List<Map<String, Object>> recommendation(){
      List<Post> post=postService.getallPosts("post");
      List<Map<String, Object>> list= new ArrayList<>();

      for(Post p: post){
        User u=userService.getUser(p.getCreater());

        Map<String,Object> user = new HashMap<>();
        user.put("id",u.getuserId().toString());
        user.put("username",u.getEmail());
        user.put("avatarUrl",u.getuserImageLink());

        Map<String, Object> map = new HashMap<>();
        map.put("postId", p.getPostId());
        map.put("coverUrl",p.getPostUrl().get(0));
        map.put("user",user);
        list.add(map);
      }

      return list;
    }


    @PostMapping("/login")
    public User Login(@RequestParam Map<String,Object> paramMap) {
        //boolean status;
        //status = userService.signUp("aaa","bbb", "ccc");
        return  userService.getUser(paramMap.get("email").toString());
        //return "hello";
    }

    @PostMapping("/signup")
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
            @RequestParam String description,
            @RequestParam String creater,
            @RequestParam String time
    ){
        List<String> postUrl = new ArrayList<>();
        for(MultipartFile file: photos){
            String url = userService.uploadUserImageToS3Bucket(file);
            if(url.isEmpty()){
                throw new IllegalStateException("Upload fails");
            }
            postUrl.add(url);
        }

        Map<String, Object> metadata = postService.createPost(creater, postUrl, description,time);

        return metadata;
    }
}
