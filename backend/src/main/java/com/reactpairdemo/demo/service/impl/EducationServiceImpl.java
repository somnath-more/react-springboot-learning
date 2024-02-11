package com.reactpairdemo.demo.service.impl;

import com.reactpairdemo.demo.dto.EducationDto;
import com.reactpairdemo.demo.dto.UserDto;
import com.reactpairdemo.demo.entity.Education;
import com.reactpairdemo.demo.entity.User;
import com.reactpairdemo.demo.exceptions.ResourceNotFoundException;
import com.reactpairdemo.demo.repo.EducationRepository;
import com.reactpairdemo.demo.repo.UserRepository;
import com.reactpairdemo.demo.service.EducationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.reactpairdemo.demo.utils.Constants.NOT_FOUND;

@Service
public class EducationServiceImpl implements EducationService {

    @Autowired
    private EducationRepository educationRepository;
    @Autowired
    private UserRepository userRepository;


    @Autowired
    private ModelMapper modelMapper;
    @Override
    public List<EducationDto> getAllEducations() {
        List<Education> educationList=educationRepository.findAll();

        return educationList.stream().map(user -> modelMapper.map(user, EducationDto.class)).collect(Collectors.toList());
    }

    @Override
    public EducationDto createEducation(Education educationDto,Long userId) {

        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User NOT FOUND "));
        educationDto.setUser(user);
        Education education = educationRepository.save(educationDto);
        return modelMapper.map(education,EducationDto.class);
    }

    @Override
    public EducationDto getEducationById(Long id) {
        Optional<Education> educationOptional=educationRepository.findById(id);
        if(educationOptional.isEmpty()){
            throw new ResourceNotFoundException(NOT_FOUND);
        }

        return modelMapper.map(educationOptional.get(),EducationDto.class);
    }

    @Override
    public EducationDto updateEducation(Long id,Long userId, EducationDto educationDto) {
        Optional<Education> educationOptional=educationRepository.findById(id);
        if(educationOptional.isEmpty()){
            throw new ResourceNotFoundException(NOT_FOUND);
        }
        educationOptional.get().setCourseName(educationDto.getCourseName());
        educationOptional.get().setPercentage(educationDto.getPercentage());
        educationOptional.get().setPassingYear(educationDto.getPassingYear());
       Education education= educationRepository.save(educationOptional.get());
        return modelMapper.map(education, EducationDto.class);
    }

    @Override
    public String deleteEducation(Long id) {
        Optional<Education> educationOptional=educationRepository.findById(id);
        if(educationOptional.isEmpty()){
            throw new ResourceNotFoundException(NOT_FOUND);
        }
        educationRepository.deleteById(id);
        return "Sucessfully Deleted";
    }
}
