package com.example.auth_service.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.auth_service.entity.User;
import com.example.auth_service.service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins="http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthService service;

    @PostMapping("/signup")
    public User signup(@RequestBody User user){
        return service.signup(user);
    }
    
     @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody User user){

    User loggedUser = service.login(user.getEmail(), user.getPassword());

    if(loggedUser == null){
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("message","Invalid credentials"));
    }

    return ResponseEntity.ok(loggedUser);
}
}
