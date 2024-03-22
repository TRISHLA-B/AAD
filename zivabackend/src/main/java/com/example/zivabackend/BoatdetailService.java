package com.example.zivabackend;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

public class BoatdetailService {
    @Autowired
    private BoatdetailRepo boatdetailRepo;
       public BoatdetailModel crateboatdetail (BoatdetailModel bdinfo)
       {
            return boatdetailRepo.save(bdinfo);
       }
       public List<BoatdetailModel> getboatdetail ()
       {
         return boatdetailRepo.findAll();
       }
       public BoatdetailModel getboatdetailbyid(int id)
       {
        return boatdetailRepo.findById(id) .orElse(null);

       }
       public BoatdetailModel updatebd(int id, BoatdetailModel updatedUser) {
        Optional<BoatdetailModel> existingUserOptional = boatdetailRepo.findById(id);

        if (existingUserOptional.isPresent()) {
            BoatdetailModel existingUser = existingUserOptional.get();  
            existingUser.setBoatid(updatedUser.getBoatid());
            existingUser.setBoatavail(updatedUser.getBoatavail());
            existingUser.setBoatname(updatedUser.getBoatname());
            existingUser.setBaotaddress(updatedUser.getBaotaddress());
            existingUser.setBoatdescription(updatedUser.getBoatdescription());
            existingUser.setBoatimgurl(updatedUser.getBoatimgurl());
            existingUser.setPrice(updatedUser.getPrice());
            existingUser.setCapacity(updatedUser.getCapacity());
            return boatdetailRepo.save(existingUser);
        } else {
            return null; 
        }
    }

    
}
