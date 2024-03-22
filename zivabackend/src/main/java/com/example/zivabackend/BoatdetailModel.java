package com.example.zivabackend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class BoatdetailModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
      private int boatid;
      private String boatname;
      private String boatdescription;
      private String baotaddress;
      private String boatavail;
      private String boatimgurl;
      private long price;
      private long capacity;
      
    

}