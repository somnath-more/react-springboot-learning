package com.reactspringlearning.todo.service.impl;

import com.reactspringlearning.todo.dto.TodoDto;
import com.reactspringlearning.todo.models.Todo;
import com.reactspringlearning.todo.repository.TodoRepository;
import com.reactspringlearning.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public List<TodoDto> getAllTodos() {
        return todoRepository.findAll()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public TodoDto addTodo(TodoDto todoDto) {
        Todo todo = mapToEntity(todoDto);
        todo.setAddedOn(new Date()); // Set current date
        Todo saved = todoRepository.save(todo);
        return mapToDto(saved);
    }

    @Override
    public TodoDto updateTodo(Long id, TodoDto todoDto) {
        Optional<Todo> optionalTodo = todoRepository.findById(id);
        if (optionalTodo.isEmpty()) {
            throw new RuntimeException("Todo not found with id: " + id);
        }

        Todo todo = optionalTodo.get();
        todo.setTitle(todoDto.getTitle());
        todo.setAddedBy(todoDto.getAddedBy());
        // Optional: update date or keep it as is
        Todo updated = todoRepository.save(todo);
        return mapToDto(updated);
    }

    @Override
    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }

    // Utility: Entity to DTO
    private TodoDto mapToDto(Todo todo) {
        TodoDto dto = new TodoDto();
        dto.setId(todo.getId());
        dto.setTitle(todo.getTitle());
        dto.setAddedBy(todo.getAddedBy());
        dto.setAddedOn(todo.getAddedOn());
        return dto;
    }

    // Utility: DTO to Entity
    private Todo mapToEntity(TodoDto dto) {
        Todo todo = new Todo();
        todo.setId(dto.getId());
        todo.setTitle(dto.getTitle());
        todo.setAddedBy(dto.getAddedBy());
        todo.setAddedOn(dto.getAddedOn());
        return todo;
    }
}
