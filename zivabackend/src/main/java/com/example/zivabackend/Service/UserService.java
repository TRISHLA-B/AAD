package com.example.zivabackend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import com.example.zivabackend.Model.User;
import com.example.zivabackend.Repo.UserRepo;
@Service
public class UserService {
    @Autowired
    private UserRepo userrepo;
    public User createuser(User userinfo)
    {
        return userrepo.save(userinfo);
    }
    public List<User> getAllUsers() {
        return userrepo.findAll();
    }	
   
    
}
