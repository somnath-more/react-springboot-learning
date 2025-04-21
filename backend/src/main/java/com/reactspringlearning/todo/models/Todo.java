package com.reactspringlearning.todo.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "todos")
@Data
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "Title should not be blank")
    private String title;

    @Temporal(TemporalType.TIMESTAMP)
    private Date addedOn;

    private String addedBy;

    // Optional: Constructors
    public Todo() {
        this.addedOn = new Date(); // set default to current time
    }

    public Todo(String title, String addedBy) {
        this.title = title;
        this.addedBy = addedBy;
        this.addedOn = new Date();
    }
}
