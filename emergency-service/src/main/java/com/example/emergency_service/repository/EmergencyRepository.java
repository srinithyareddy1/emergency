package com.example.emergency_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.emergency_service.entity.EmergencyRequest;

public interface EmergencyRepository extends JpaRepository<EmergencyRequest, Long> {
    
}
