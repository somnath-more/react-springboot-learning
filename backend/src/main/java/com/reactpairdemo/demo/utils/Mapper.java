package com.reactpairdemo.demo.utils;

import com.reactpairdemo.demo.dto.UserDto;
import com.reactpairdemo.demo.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Mapper {

    @Autowired
    private ModelMapper mapper;

    public UserDto entityToDto(User user){
        return mapper.map(user, UserDto.class);
    }

    public User dtoToEntity(UserDto user){
        return mapper.map(user, User.class);
    }
}
