package com.reactpairdemo.demo.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.reactpairdemo.demo.entity.User;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
public class EducationDto {

    private Long id;
    @NotNull(message = "Please Enter courseName")
    @Size(min = 4,message = "Please Enter valid courseName")
    private String courseName;
    @NotNull(message = "Please Enter courseName")
    private String percentage;

    @NotNull(message = "Please Enter courseName")
    private LocalDate passingYear;

}
