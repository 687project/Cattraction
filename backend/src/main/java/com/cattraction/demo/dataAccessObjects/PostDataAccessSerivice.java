package com.cattraction.demo.dataAccessObjects;


import com.cattraction.demo.domains.Post;
import com.cattraction.demo.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PostDataAccessSerivice {

    private final PostRepository postRepository;

    @Autowired
    public PostDataAccessSerivice(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Post getPost(String postId) {
        return postRepository.findByPostId(postId);
    }

    public void savePost(Post post){ postRepository.save(post);}
}
