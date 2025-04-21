package com.reactspringlearning.todo.service;

import com.reactspringlearning.todo.dto.TodoDto;

import java.util.List;

public interface TodoService {
     List<TodoDto> getAllTodos();
     TodoDto addTodo(TodoDto todoDto);
     TodoDto updateTodo(Long id, TodoDto todoDto);
     void deleteTodo(Long id);
}
