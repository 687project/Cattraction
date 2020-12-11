package com.cattraction.demo.services;

import com.cattraction.demo.dataAccessObjects.CatPostDataAccessSerivice;
import com.cattraction.demo.domains.CatPost;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
public class CatPostService{

    private CatPostDataAccessSerivice catpostDataAccessSerivice;

    @Autowired
    public CatPostService(CatPostDataAccessSerivice catpostDataAccessSerivice) {
        this.catpostDataAccessSerivice = catpostDataAccessSerivice;
    }

    public Map<String, Object> createPost(String creater, List<String> postUrl, String description, String time, String title, Map<String,Object> cat){
        UUID id = UUID.randomUUID();
        CatPost post = new CatPost(id, description, postUrl, creater, time, title, cat);
        catpostDataAccessSerivice.savePost(post);

        Map<String, Object> metadata = new HashMap<>();
        metadata.put("postId", id);
        metadata.put("creater", creater);
        metadata.put("description", description);
        metadata.put("postUrls", postUrl);

        return metadata;
    }

    public CatPost getPost(UUID postId){
        return catpostDataAccessSerivice.getPost(postId);
    }

    public List<CatPost> getallPosts(String tag){
      return catpostDataAccessSerivice.getallPosts(tag);
    }

    public List<CatPost> getPostbyemail(String email){
      return catpostDataAccessSerivice.getPostbyemail(email);
    }
}
