package com.karanpawar.synapseshelf.service;

import com.karanpawar.synapseshelf.model.User;

import java.util.List;

public interface UserService {
    User getUserByEmail(String email);

    User createUser(User user);

    List<User> getAllUsers();
}
