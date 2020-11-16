package com.cattraction.demo.dataAccessObjects;

import com.cattraction.demo.datastore.FakeUserProfileDataStore;
import com.cattraction.demo.domains.User;
import com.cattraction.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDataAccessService {

    private final UserRepository userRepository;

    @Autowired
    public UserDataAccessService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getallUsers(String email){
        return  userRepository.findAllByEmail(email);
    }

    public User getUser(String email){
        return  userRepository.findByEmail(email);
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(String email) {
        userRepository.deleteByEmail(email);
    }
}
