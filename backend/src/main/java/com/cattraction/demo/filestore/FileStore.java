package com.cattraction.demo.filestore;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.cattraction.demo.AmzonS3.AmazonS3Bucket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.Date;
import java.util.Map;
import java.util.Optional;

@Service
public class  FileStore {

    private final AmazonS3 s3;

    private String endpointUrl;
    private String bucketName;

    @Autowired
    public FileStore(AmazonS3 s3) {

        this.s3 = s3;
        this.bucketName = AmazonS3Bucket.PROFILE_IMAGE.getBucketName();
        this.endpointUrl = "https://"+bucketName+".s3.us-east-2.amazonaws.com";
    }

    public String save(String path,
                       String fileName,
                       Optional<Map<String, String>> optionalMetaData,
                       InputStream inputStream){
        ObjectMetadata metadata = new ObjectMetadata();
        optionalMetaData.ifPresent(map -> {
            if(!map.isEmpty()){
                map.forEach(metadata::addUserMetadata);
            }
        });

        String fname = new Date().getTime() + "-" + fileName.replace(" ", "_");
        String fileUrl = "";
        try{
            fileUrl = endpointUrl + "/" + fname;
            s3.putObject(new PutObjectRequest(path, fname, inputStream, metadata)
                    .withCannedAcl(CannedAccessControlList.PublicRead));
        } catch (AmazonServiceException e){
            throw new IllegalStateException("Failed to store file to s3", e);
        }

        return fileUrl;
    }
}
