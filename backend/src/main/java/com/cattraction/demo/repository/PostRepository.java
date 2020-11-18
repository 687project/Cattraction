package com.cattraction.demo.repository;

import com.cattraction.demo.domains.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PostRepository extends MongoRepository<Post, String>{
    Post findByPostId(String postId);
    List<Post> findAllByTag(String tag);
    List<Post> findAllByCreater(String email);

}
