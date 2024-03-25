package com.example.zivabackend.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.zivabackend.Model.BoatdetailModel;
import com.example.zivabackend.Service.BoatdetailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RestController
@RequestMapping("/boatdetails")


public class BoatdetailController {
    @Autowired
    public BoatdetailService boatdetailService;
    @GetMapping 
    public List<BoatdetailModel> getboatdetail()
    {
           return boatdetailService.getboatdetail();
    }
    @PostMapping 
    public BoatdetailModel createboatdetail (@RequestBody BoatdetailModel info)
    {
             return boatdetailService.createboatdetail(info);
    }
    @PutMapping("/{id}")
    public BoatdetailModel updatebd(@PathVariable int id ,@RequestBody BoatdetailModel infom)
    {
        return  boatdetailService.updatebd(id, infom);
    }
    @DeleteMapping("/{id}")
     public void deleteboatdetail(@PathVariable int id)
     {
        boatdetailService.deleteboatdetail(id);
     }

    
}
