package com.cattraction.demo.domains;

import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.Map;

public class CatPost {

    private UUID postId;
    private String title;
    private String postDesc;
    private List<String> postUrl;
    private String creater;
    private String tag="catpost";
    private String time;

    private String cat_name;
    private String cat_age;
    private String cat_breed;
    private Boolean cat_gender;
    private String cat_location;
    private Map<String, Object> cat;


    public CatPost(UUID postId, String postDesc, List<String> postUrl, String creater, String time, String title, Map<String, Object> cat) {
        this.postId = postId;
        this.postDesc = postDesc;
        this.postUrl = postUrl;
        this.creater = creater;
        this.time=time;
        this.title=title;
        this.cat_name=cat.get("name").toString();
        this.cat_age=cat.get("age").toString();
        this.cat_breed=cat.get("breed").toString();
        //String gender = (String)cat.get("gender");
        //this.cat_gender = !gender.equals("0");
        this.cat_gender=cat.get("gender").toString().equals("0")?false:true;
        this.cat_location=cat.get("location").toString();
        this.cat=cat;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CatPost post = (CatPost) o;
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

    public String getCatName() {
        return cat_name;
    }

    public void setCatName(String cat_name) {
        this.cat_name = cat_name;
    }

    public String getCatAge() {
        return cat_age;
    }

    public void setCatAge(String cat_age) {
        this.cat_age = cat_age;
    }

    public String getCatBreed() {
        return cat_breed;
    }

    public void setCatBreed(String cat_breed) {
        this.cat_breed = cat_breed;
    }

    public Boolean getCatGender() {
        return cat_gender;
    }

    public void setCatGender(Boolean cat_gender) {
        this.cat_gender = cat_gender;
    }

    public String getCatLocation() {
        return cat_location;
    }

    public void setCatLocation(String cat_location) {
        this.cat_location = cat_location;
    }


}
