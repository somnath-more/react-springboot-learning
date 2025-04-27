package com.reactspringlearning.todo.service.Impl;

import com.reactspringlearning.todo.dto.TodoDTO;
import com.reactspringlearning.todo.models.Todo;
import com.reactspringlearning.todo.repository.TodoRepository;
import com.reactspringlearning.todo.service.TodoService;
import com.reactspringlearning.todo.utils.TodoMapper.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;




@Service
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepository;
    @Autowired
    private final TodoMapper todoMapper;

    public TodoServiceImpl(TodoRepository todoRepository, TodoMapper todoMapper) {
        this.todoRepository = todoRepository;
        this.todoMapper = todoMapper;
    }

    @Override
    public TodoDTO createTodo(TodoDTO todoDTO) {
        Todo todo = todoMapper.toEntity(todoDTO);
        Todo savedTodo = todoRepository.save(todo);
        return todoMapper.toDto(savedTodo);
    }

    @Override
    public TodoDTO getTodoById(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found"));
        return todoMapper.toDto(todo);
    }

    @Override
    public List<TodoDTO> getAllTodos() {
        return todoRepository.findAll()
                .stream()
                .map(todoMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public TodoDTO updateTodo(Long id, TodoDTO todoDTO) {
        Todo existingTodo = todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found"));

        existingTodo.setTitle(todoDTO.getTitle());
        existingTodo.setDescription(todoDTO.getDescription());
        existingTodo.setCompleted(todoDTO.isCompleted());

        Todo updatedTodo = todoRepository.save(existingTodo);
        return todoMapper.toDto(updatedTodo);
    }

    @Override
    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }
}
