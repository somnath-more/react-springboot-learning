package com.reactpairdemo.demo.service;

import com.reactpairdemo.demo.dto.EducationDto;
import com.reactpairdemo.demo.entity.Education;

import java.util.List;

public interface EducationService {
    List<EducationDto> getAllEducations();
    EducationDto createEducation(Education educationDto, Long userId);
    EducationDto getEducationById(Long id);
    EducationDto updateEducation(Long id ,Long userId, EducationDto educationDto);
    String deleteEducation(Long id);
}
