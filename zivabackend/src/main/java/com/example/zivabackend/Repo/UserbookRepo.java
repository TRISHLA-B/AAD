package com.example.zivabackend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.zivabackend.Model.Userbook;

public interface UserbookRepo  extends JpaRepository<Userbook, Integer>{
    
}
