package com.reactspringlearning.todo.dto;

import lombok.Data;
import java.util.Date;

@Data
public class TodoDto {
    private Long id;
    private String title;
    private Date addedOn;
    private String addedBy;
}
