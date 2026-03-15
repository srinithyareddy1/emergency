package com.example.emergency_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.emergency_service.entity.EmergencyRequest;
import com.example.emergency_service.service.EmergencyService;

import java.util.List;

@RestController
@RequestMapping("/requests")
@CrossOrigin(origins = "https://emergency-response-ui.netlify.app")
public class EmergencyController {

    @Autowired
    private EmergencyService service;

    @PostMapping
    public EmergencyRequest createRequest(@RequestBody EmergencyRequest request) {

        return service.createRequest(request);
    }

    @GetMapping
    public List<EmergencyRequest> getRequests() {
        return service.getRequests();
    }

}
