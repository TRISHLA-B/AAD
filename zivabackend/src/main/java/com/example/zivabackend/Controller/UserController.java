package com.example.zivabackend.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.zivabackend.Service.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.zivabackend.Model.User;


@RestController
@RequestMapping("/user")


public class UserController {
    
    @Autowired
    private     UserService userservice;
    @GetMapping
    public List<User> getAllUsers() {
        return userservice.getAllUsers();
    }
    @PostMapping
	    public User createuser(@RequestBody User event) {
	        return userservice.createuser(event);
	    }

   
    
}
