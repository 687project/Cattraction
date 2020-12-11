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
    private final CatPostService catpostService;

    @Autowired
    public PostController(PostService postService, UserService userService, CatPostService catpostService) {
        this.postService = postService;
        this.userService = userService;
        this.catpostService= catpostService;
    }

    @PostMapping("/getpost")
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
        udata.put("avatarUrl", "");
        udata.put("following", 0);
        udata.put("followed", 0);
        udata.put("signature", "");

        data.put("postId", Id);
        data.put("postTime", post.getTime());
        data.put("description", post.getPostDesc());
        data.put("imgUrls", post.getPostUrl());
        data.put("user", udata);
        data.put("title",post.getTitle());

        return data;
    }

    @PostMapping("/getcatpost")
    public Map<String, Object> getCatPost(
            @RequestParam String postId
    ){
        UUID Id=UUID.fromString(postId);
        Map<String, Object> data = new HashMap<>();

        CatPost post = catpostService.getPost(Id);
        User creater = userService.getUser(post.getCreater());

        Map<String, Object> udata = new HashMap<>();
        udata.put("id", creater.getuserId());
        udata.put("nickname", creater.getUsername());
        udata.put("avatarUrl", "");
        udata.put("following", 0);
        udata.put("followed", 0);
        udata.put("signature", "");

        data.put("postId", Id);
        data.put("postTime", post.getTime());
        data.put("description", post.getPostDesc());
        data.put("imgUrls", post.getPostUrl());
        data.put("catName", post.getCatName());
        data.put("catBreed", post.getCatBreed());
        data.put("catAge", post.getCatAge());
        data.put("catGender", post.getCatGender());
        data.put("catLocation", post.getCatLocation());
        data.put("user", udata);

        return data;
    }

    @PostMapping("/newpost")
    @CrossOrigin("*")
    public Map<String, Object> uploadUserProfileImage(
            @RequestParam MultipartFile[] photos,
            @RequestParam List<Object> data
    ){
        List<String> postUrl = new ArrayList<>();
        for(MultipartFile file: photos){
            String url = userService.uploadUserImageToS3Bucket(file);
            if(url.isEmpty()){
                throw new IllegalStateException("Upload fails");
            }
            postUrl.add(url);
        }

        Map<String, Object> metadata = postService.createPost(
        data.get(0).toString(), postUrl,
        data.get(1).toString(),data.get(2).toString(),
        data.get(3).toString());

        return metadata;
    }

    @PostMapping("/catnewpost")
    public Map<String, Object> uploadcatpost(
            @RequestParam MultipartFile[] photos,
            @RequestParam List<Object> data,
            @RequestParam List<Object> cat
    ){
        List<String> postUrl = new ArrayList<>();
        for(MultipartFile file: photos){
            String url = userService.uploadUserImageToS3Bucket(file);
            if(url.isEmpty()){
                throw new IllegalStateException("Upload fails");
            }
            postUrl.add(url);
        }

        Map<String, Object> cat_map=new HashMap<>();
        cat_map.put("name",cat.get(0));
        cat_map.put("age",cat.get(1));
        cat_map.put("breed",cat.get(2));
        cat_map.put("gender",cat.get(3));
        cat_map.put("location",cat.get(4));

        Map<String, Object> metadata = catpostService.createPost(
        data.get(0).toString(), postUrl,
        data.get(1).toString(),data.get(2).toString(),
        data.get(3).toString(),cat_map);

        return metadata;
    }


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

    @PostMapping("/catdating")
    public List<Map<String, Object>> catDating(){
      List<CatPost> post=catpostService.getallPosts("catpost");
      List<Map<String, Object>> list= new ArrayList<>();

      for(CatPost p: post){
        User u=userService.getUser(p.getCreater());

        Map<String,Object> user = new HashMap<>();
        user.put("id",u.getuserId().toString());
        user.put("username",u.getEmail());
        user.put("avatarUrl",u.getuserImageLink());

        Map<String, Object> map = new HashMap<>();
        map.put("postId", p.getPostId());
        map.put("coverUrl",p.getPostUrl().get(0));
        map.put("user",user);
        map.put("catName",p.getCatName());
        map.put("catBreed",p.getCatBreed());
        map.put("catAge",p.getCatAge());
        map.put("catGender",p.getCatGender());
        map.put("catLocation",p.getCatLocation());
        map.put("description",p.getPostDesc());
        list.add(map);
      }

      return list;
    }

    @GetMapping("/allPosts")
    public List<Post> getPosts(){
        return postService.getallPosts("post");
    }

    @GetMapping("/allCatPosts")
    public List<CatPost> getCatPosts(){
        return catpostService.getallPosts("catpost");
    }

}
