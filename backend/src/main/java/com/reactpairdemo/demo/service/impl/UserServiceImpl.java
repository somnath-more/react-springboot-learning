package com.reactpairdemo.demo.service.impl;

import com.reactpairdemo.demo.dto.UserDto;
import com.reactpairdemo.demo.entity.User;
import com.reactpairdemo.demo.exception.UserException;
import com.reactpairdemo.demo.repository.UserRepository;
import com.reactpairdemo.demo.service.UserService;
import com.reactpairdemo.demo.utils.Mapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.reactpairdemo.demo.utils.Constants.DELETE_SUCCESS;
import static com.reactpairdemo.demo.utils.Constants.ID_NOT_FOUND;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

   private final Mapper mapper;
    @Autowired
    public UserServiceImpl(UserRepository userRepository, Mapper mapper) {
        this.userRepository = userRepository;
        this.mapper = mapper;
    }

    @Override
    public UserDto createUser(UserDto user) {
        User userResponse=this.mapper.dtoToEntity(user);
        User user1=userRepository.save(userResponse);
        return mapper.entityToDto(user1);
    }

    @Override
    public UserDto getUserById(Long id) {
        Optional<User> userOptional=userRepository.findById(id);
        if(userOptional.isEmpty()){
            throw  new UserException(ID_NOT_FOUND);
        }

        return  mapper.entityToDto(userOptional.get());
    }

    @Override
    public UserDto updateUser(Long id, UserDto userDto) {
        Optional<User> userOptional=userRepository.findById(id);
        if(userOptional.isEmpty()){
            throw  new UserException(ID_NOT_FOUND);
        }
         userOptional.get().setEmail(userDto.getEmail());
        userOptional.get().setName(userDto.getName());
        userOptional.get().setPassword(userDto.getPassword());
        User userResponse=userRepository.save(userOptional.get());
        return  mapper.entityToDto(userResponse);
    }

    @Override
    public String deleteUser(Long id) {
        Optional<User> userOptional=userRepository.findById(id);
        if(userOptional.isEmpty()){
            throw  new UserException(ID_NOT_FOUND);
        }
        userRepository.deleteById(id);
        return  DELETE_SUCCESS;
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> userList=userRepository.findAll();
        return userList.stream().map(mapper::entityToDto).collect(Collectors.toList());
    }
}
