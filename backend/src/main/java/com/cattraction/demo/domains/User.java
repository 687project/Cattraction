package com.cattraction.demo.domains;

import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

public class User {

    private UUID userId;
    private String username;
    private String email;
    private String password;
    private String userImageLink; // s3 key

    public User(UUID userId, String email, String username, String password) {
        this.userId = userId;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public UUID getuserId() {
        return userId;
    }

    public void setuserId(UUID userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Optional<String> getuserImageLink() {
        return Optional.ofNullable(userImageLink);
    }

    public void setuserImageLink(String userImageLink) {
        this.userImageLink = userImageLink;
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
        User that = (User) o;
        return userId.equals(that.userId) &&
                username.equals(that.username) &&
                email.equals(that.email) &&
                password.equals(that.password) &&
                userImageLink.equals(that.userImageLink);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, username, email, password, userImageLink);
    }
}
