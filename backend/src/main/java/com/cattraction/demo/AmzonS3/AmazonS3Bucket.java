package com.cattraction.demo.AmzonS3;

public enum AmazonS3Bucket {

    PROFILE_IMAGE("cattraction-image-upload");

    private final String bucketName;

    AmazonS3Bucket(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {

        return bucketName;
    }
}