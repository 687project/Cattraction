package com.cattraction.demo.repository;

import com.cattraction.demo.domains.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String>{

    User findByEmail(String email);
    List<User> findAllByTag(String tag);
    void deleteByEmail(String email);


}
