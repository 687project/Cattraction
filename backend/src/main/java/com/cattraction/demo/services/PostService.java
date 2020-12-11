package com.cattraction.demo.services;

import com.cattraction.demo.dataAccessObjects.PostDataAccessSerivice;
import com.cattraction.demo.domains.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
public class PostService{

    private PostDataAccessSerivice postDataAccessSerivice;

    @Autowired
    public PostService(PostDataAccessSerivice postDataAccessSerivice) {
        this.postDataAccessSerivice = postDataAccessSerivice;
    }

    public Map<String, Object> createPost(String creater, List<String> postUrl, String description, String time, String title){
        UUID id = UUID.randomUUID();
        Post post = new Post(id, description, postUrl, creater,time,title);
        postDataAccessSerivice.savePost(post);

        Map<String, Object> metadata = new HashMap<>();
        metadata.put("postId", id);
        metadata.put("creater", creater);
        metadata.put("description", description);
        metadata.put("postUrls", postUrl);

        return metadata;
    }

    public Post getPost(UUID postId){
        return postDataAccessSerivice.getPost(postId);
    }

    public List<Post> getallPosts(String tag){
      return postDataAccessSerivice.getallPosts(tag);
    }

    public List<Post> getPostbyemail(String email){
      return postDataAccessSerivice.getPostbyemail(email);
    }
}
