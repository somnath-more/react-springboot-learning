package com.reactspringlearning.todo.service;

import com.reactspringlearning.todo.dto.TodoDTO;

import java.util.List;

public interface TodoService {
     TodoDTO createTodo(TodoDTO todoDTO);
     TodoDTO getTodoById(Long id);
     List<TodoDTO> getAllTodos();
     TodoDTO updateTodo(Long id, TodoDTO todoDTO);
     void deleteTodo(Long id);
}
