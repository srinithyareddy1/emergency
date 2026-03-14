package com.example.hospital_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.hospital_service.entity.Hospital;
import com.example.hospital_service.repository.HospitalRepository;
import com.example.hospital_service.service.HospitalService;

import java.util.List;

@RestController
@RequestMapping("/hospitals")
@CrossOrigin(origins="*")
public class HospitalController {
   
    @Autowired
    private HospitalService service;
    
    @PostMapping
    public Hospital addHospital(@RequestBody Hospital hospital){
        return service.addHospital(hospital);
    }
    @GetMapping
    public List<Hospital> getHospitals(){
        return service.getHospitals();
    
    }

    
}
