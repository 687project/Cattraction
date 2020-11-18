package com.cattraction.demo.repository;

import com.cattraction.demo.domains.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface PostRepository extends MongoRepository<Post, String>{
    Post findByPostId(UUID postId);
    List<Post> findAllByTag(String tag);
    List<Post> findAllByCreater(String email);

}
