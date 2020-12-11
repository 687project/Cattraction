package com.cattraction.demo.domains;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

public class Post {

    private UUID postId;
    private String title;
    private String postDesc;
    private List<String> postUrl;
    private String creater;
    private String tag="post";
    private String time;


    public Post(UUID postId, String postDesc, List<String> postUrl, String creater, String time, String title) {
        this.postId = postId;
        this.postDesc = postDesc;
        this.postUrl = postUrl;
        this.creater = creater;
        this.time=time;
        this.title=title;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return postId.equals(post.postId) &&
                Objects.equals(postDesc, post.postDesc) &&
                postUrl.equals(post.postUrl) &&
                creater.equals(post.creater) &&
                time.equals(post.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(postId, postDesc, postUrl, creater, time);
    }

    public UUID getPostId() {
        return postId;
    }

    public void setPostId(UUID postId) {
        this.postId = postId;
    }

    public String getPostDesc() {
        return postDesc;
    }

    public void setPostDesc(String postDesc) {
        this.postDesc = postDesc;
    }

    public List<String> getPostUrl() {
        return postUrl;
    }

    public void setPostUrl(List<String> postUrl) {
        this.postUrl = postUrl;
    }

    public String getCreater() {
        return creater;
    }

    public void setCreater(String creater) {
        this.creater = creater;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

}
