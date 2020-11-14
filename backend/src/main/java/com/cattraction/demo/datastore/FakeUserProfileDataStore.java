package com.cattraction.demo.datastore;

import com.cattraction.demo.domains.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class  FakeUserProfileDataStore {

    private static final List<User> USER_PROFILES = new ArrayList<>();

//    static {
//        USER_PROFILES.add(new User(UUID.randomUUID(), "Zimu", null));
//        USER_PROFILES.add(new User(UUID.randomUUID(), "Kecheng", null));
//    }

    public List<User> getUserProfiles(){
        return USER_PROFILES;
    }
}
