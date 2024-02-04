package com.reactpairdemo.demo.repo;

import com.reactpairdemo.demo.entity.Education;
import com.reactpairdemo.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface EducationRepository extends JpaRepository<Education, Long> {
    Optional<Education> findByCourseName(String courseName);
}


