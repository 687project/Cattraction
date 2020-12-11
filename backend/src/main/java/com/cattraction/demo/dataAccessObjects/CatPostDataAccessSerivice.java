package com.cattraction.demo.dataAccessObjects;


import com.cattraction.demo.domains.CatPost;
import com.cattraction.demo.repository.CatPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class CatPostDataAccessSerivice {

    private final CatPostRepository catpostRepository;

    @Autowired
    public CatPostDataAccessSerivice(CatPostRepository catpostRepository) {
        this.catpostRepository = catpostRepository;
    }

    public CatPost getPost(UUID postId) {
        return catpostRepository.findByPostId(postId);
    }

    public void savePost(CatPost post){ catpostRepository.save(post);}

    public List<CatPost> getallPosts(String tag){
      return catpostRepository.findAllByTag(tag);
    }

    public List<CatPost> getPostbyemail(String email){
      return catpostRepository.findAllByCreater(email);
    }
}
