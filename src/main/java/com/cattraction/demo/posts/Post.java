package com.cattraction.demo.posts;

import java.util.Objects;
import java.util.UUID;

public class Post {

    private UUID postId;
    private String postName;
    private String postUrl;

    public Post(UUID postId, String postName, String postUrl) {
        this.postId = postId;
        this.postName = postName;
        this.postUrl = postUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return postId.equals(post.postId) &&
                postName.equals(post.postName) &&
                postUrl.equals(post.postUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(postId, postName, postUrl);
    }

    public UUID getPostId() {
        return postId;
    }

    public void setPostId(UUID postId) {
        this.postId = postId;
    }

    public String getPostName() {
        return postName;
    }

    public void setPostName(String postName) {
        this.postName = postName;
    }

    public String getPostUrl() {
        return postUrl;
    }

    public void setPostUrl(String postUrl) {
        this.postUrl = postUrl;
    }
}
