package com.example.hospital_service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hospital_service.entity.Hospital;
import com.example.hospital_service.repository.HospitalRepository;

import java.util.List;

@Service
public class HospitalService {

    @Autowired
    private HospitalRepository repository;

    public Hospital addHospital(Hospital hospital){
        return repository.save(hospital);
    }
    public List<Hospital> getHospitals(){
        return repository.findAll();
    }

    
}
