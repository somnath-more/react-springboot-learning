package com.reactpairdemo.demo.service;

import com.reactpairdemo.demo.dto.UserDto;

import java.util.List;

public interface UserService {
    List<UserDto> getAllUsers();
    UserDto createUser(UserDto userDto);
    UserDto getUserById(Long id);
    UserDto updateUser(Long id , UserDto userDto);
    String deleteUser(Long id);

}
