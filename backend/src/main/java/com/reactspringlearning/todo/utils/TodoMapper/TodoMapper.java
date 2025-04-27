package com.reactspringlearning.todo.utils.TodoMapper;


import com.reactspringlearning.todo.dto.TodoDTO;
import com.reactspringlearning.todo.models.Todo;
import org.modelmapper.ModelMapper;

import org.springframework.stereotype.Component;

@Component
public class TodoMapper {

    private final ModelMapper modelMapper = new ModelMapper();

    public TodoDTO toDto(Todo todo) {
        return modelMapper.map(todo, TodoDTO.class);
    }

    public Todo toEntity(TodoDTO todoDTO) {
        return modelMapper.map(todoDTO, Todo.class);
    }
}
