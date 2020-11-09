package com.cattraction.demo.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private PostDataAccessSerivice postDataAccessSerivice;

    @Autowired
    public PostService(PostDataAccessSerivice postDataAccessSerivice) {
        this.postDataAccessSerivice = postDataAccessSerivice;
    }

    public List<Post> getPosts(){
        return postDataAccessSerivice.getPostData();
    }
}
