package com.example.zivabackend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.zivabackend.Model.User;

public interface UserRepo extends JpaRepository<User,Integer>{
    
}
