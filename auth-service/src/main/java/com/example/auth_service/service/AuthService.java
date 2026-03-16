package com.example.auth_service.service;

import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.auth_service.entity.User;
import com.example.auth_service.repository.UserRepository;

@Service

public class AuthService {
    
    @Autowired
    private UserRepository repo;

    public User signup(User user){

        // if(user.getRole().equalsIgnoreCase("admin")){
        //     throw new RuntimeErrorException(null, "Admin signup not allowed");
        // }
        return repo.save(user);
    }

    public User login(String email, String password) {
        User user=repo.findByEmail(email);

        if (user !=null && user.getPassword().equals(password)){
            return user;
        }
        return null;

    }
}
