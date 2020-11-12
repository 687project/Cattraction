package com.cattraction.demo.posts;

import com.cattraction.demo.datastore.PostData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
public class PostDataAccessSerivice {

    private final PostData postData;

    @Autowired
    public PostDataAccessSerivice(PostData postData) {
        this.postData = postData;
    }

    public List<Post> getPostData() {
        return postData.getPostsList();
    }
}
