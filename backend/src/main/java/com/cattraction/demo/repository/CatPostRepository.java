package com.cattraction.demo.repository;

import com.cattraction.demo.domains.CatPost;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface CatPostRepository extends MongoRepository<CatPost, String>{
    CatPost findByPostId(UUID postId);
    List<CatPost> findAllByTag(String tag);
    List<CatPost> findAllByCreater(String email);

}
