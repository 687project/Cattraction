package com.cattraction.demo.profile;

import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

public class UserProfile {

    private UUID userProfileId;
    private String username;
    private String email;
    private String password;
    private String userProfileImageLink; // s3 key

    public UserProfile(UUID userProfileId, String username, String userProfileImageLink) {
        this.userProfileId = userProfileId;
        this.username = username;
        this.userProfileImageLink = userProfileImageLink;
    }

    public UUID getUserProfileId() {
        return userProfileId;
    }

    public void setUserProfileId(UUID userProfileId) {
        this.userProfileId = userProfileId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Optional<String> getUserProfileImageLink() {
        return Optional.ofNullable(userProfileImageLink);
    }

    public void setUserProfileImageLink(String userProfileImageLink) {
        this.userProfileImageLink = userProfileImageLink;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserProfile that = (UserProfile) o;
        return userProfileId.equals(that.userProfileId) &&
                username.equals(that.username) &&
                email.equals(that.email) &&
                password.equals(that.password) &&
                userProfileImageLink.equals(that.userProfileImageLink);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userProfileId, username, email, password, userProfileImageLink);
    }
}
