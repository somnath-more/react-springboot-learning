package com.reactpairdemo.demo.controller;

import com.reactpairdemo.demo.dto.EducationDto;
import com.reactpairdemo.demo.dto.EducationDto;
import com.reactpairdemo.demo.entity.Education;
import com.reactpairdemo.demo.service.EducationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/education")
public class EducationController {

    @Autowired
    private EducationService educationService;
    @GetMapping
    public ResponseEntity<List<EducationDto>> getAllEducations() {
        return new ResponseEntity<>(educationService.getAllEducations(), HttpStatus.OK);
    }


    @PostMapping("/user/{userId}")
    public ResponseEntity<EducationDto> createEducation(@Valid @RequestBody Education educationDto, @PathVariable Long userId) {
        return new ResponseEntity<>(educationService.createEducation(educationDto,userId), HttpStatus.CREATED);
    }


    @GetMapping("/{id}")
    public ResponseEntity<EducationDto> getEducationById(@PathVariable Long id) {
        return new ResponseEntity<>(educationService.getEducationById(id), HttpStatus.OK);

    }


    @PutMapping("/{id}/user/{userId}")
    public ResponseEntity<EducationDto> updateEducation(@PathVariable Long id, @PathVariable Long userId,@Valid @RequestBody EducationDto educationDto) {
        return new ResponseEntity<>(educationService.updateEducation(id,userId,educationDto), HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEducation(@PathVariable Long id) {
        return new ResponseEntity<>(educationService.deleteEducation(id), HttpStatus.OK);
    }
}
