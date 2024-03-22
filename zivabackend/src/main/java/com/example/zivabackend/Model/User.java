package com.example.zivabackend.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name ="userdetail")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
   @Id
   @GeneratedValue(strategy=GenerationType.IDENTITY)
   private long id;
   private String name;
   private String email;
   private String password;
   
    
}
