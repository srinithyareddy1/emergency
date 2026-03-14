package com.example.hospital_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.hospital_service.entity.Hospital;

public interface HospitalRepository extends JpaRepository<Hospital,Long> {
    
}
