package com.reactpairdemo.demo.dto;

import com.reactpairdemo.demo.entity.Education;
import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;

import jakarta.validation.constraints.*;
import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;


@Data
public class UserDto {
    private Long id;
    @NotNull(message = "Please enter email")
    @Email(message = "Invalid email format")
    private String email;
    @NotNull(message = "Please enter password")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&+=])[A-Za-z\\d@#$%^&+=]{8,}$",message = "Invalid password format")
    private String password;
    @NotNull(message = "Please enter name")
    @Size(min = 4,message = "Please enter a valid name")
    private String name;
    @NotNull(message = "Please enter age")
    private Long age;

    private List<EducationDto> education= new ArrayList<>();
}
