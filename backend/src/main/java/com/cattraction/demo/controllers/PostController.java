package com.cattraction.demo.controllers;

import com.cattraction.demo.domains.User;
import com.cattraction.demo.services.PostService;
import com.cattraction.demo.domains.Post;
import com.cattraction.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/posts")
@CrossOrigin("*")
public class PostController {

    private final PostService postService;
    private final UserService userService;

    @Autowired
    public PostController(PostService postService, UserService userService) {
        this.postService = postService;
        this.userService = userService;
    }

    @PostMapping("/getpost")
    @CrossOrigin("*")
    public Map<String, Object> getPost(
            @RequestParam String postId
    ){
        UUID Id=UUID.fromString(postId);
        Map<String, Object> data = new HashMap<>();

        Post post = postService.getPost(Id);
        User creater = userService.getUser(post.getCreater());

        Map<String, Object> udata = new HashMap<>();
        udata.put("id", creater.getuserId());
        udata.put("nickname", creater.getUsername());
        udata.put("avatar_url", "");
        udata.put("following", 0);
        udata.put("followed", 0);
        udata.put("signature", "");

        data.put("post_id", Id);
        data.put("post_time", post.getTime());
        data.put("description", post.getPostDesc());
        data.put("img_urls", post.getPostUrl());
        data.put("user", udata);

        return data;
    }

}
