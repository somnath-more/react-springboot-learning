package com.reactpairdemo.demo.service;

import com.reactpairdemo.demo.dto.UserDto;

import java.util.List;

public interface UserService {
    public UserDto createUser(UserDto user);
    public UserDto getUserById(Long id);
    public UserDto updateUser(Long id,UserDto userDto);

    public String deleteUser(Long id);
    
    public List<UserDto> getAllUsers();
}
