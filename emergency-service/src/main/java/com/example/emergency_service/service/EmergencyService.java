package com.example.emergency_service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.emergency_service.entity.EmergencyRequest;
import com.example.emergency_service.repository.EmergencyRepository;

import java.util.List;

@Service
public class EmergencyService {
    @Autowired
    private EmergencyRepository repo;

    public EmergencyRequest creaRequest(EmergencyRequest request){

        request.setStatus("Ambulance on the way");

        return repo.save(request);
    }
    public List<EmergencyRequest> getRequests(){
        return repo.findAll();
    }
    
}
