package com.reactpairdemo.demo.service.impl;

import com.reactpairdemo.demo.dto.UserDto;
import com.reactpairdemo.demo.entity.User;
import com.reactpairdemo.demo.exceptions.ResourceNotFoundException;
import com.reactpairdemo.demo.repo.UserRepository;
import com.reactpairdemo.demo.service.UserService;
import com.reactpairdemo.demo.utils.Mapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.reactpairdemo.demo.utils.Constants.NOT_FOUND;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private Mapper mapper;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<UserDto> getAllUsers() {
        List<User> userList=userRepository.findAll();

        return userList.stream().map(user -> mapper.entityToDto(user)).collect(Collectors.toList());
    }

    @Override
    public UserDto createUser(UserDto userDto)  {
        User isExistingUser=userRepository.findByEmail(userDto.getEmail()).orElse(null);
        if(isExistingUser!=null){
          throw new IllegalArgumentException("User Already Existed !!");
        }
        User user=userRepository.save(mapper.dtoToEntity(userDto));
        return mapper.entityToDto(user);
    }

    @Override
    public UserDto getUserById(Long id) {
        Optional<User> userOptional=userRepository.findById(id);
        if(userOptional.isEmpty()){
            throw new ResourceNotFoundException(NOT_FOUND);
        }

        return mapper.entityToDto(userOptional.get());
    }

    @Override
    public UserDto updateUser(Long id, UserDto userDto) {
        Optional<User> userOptional=userRepository.findById(id);
        if(userOptional.isEmpty()){
            throw new ResourceNotFoundException(NOT_FOUND);
        }
        userOptional.get().setName(userDto.getName());
        userOptional.get().setEmail(userDto.getEmail());
        userOptional.get().setPassword(userDto.getPassword());
        userOptional.get().setAge(userDto.getAge());
        User user=userRepository.save(userOptional.get());
        return mapper.entityToDto(user) ;
    }

    @Override
    public String deleteUser(Long id) {
        Optional<User> userOptional=userRepository.findById(id);
        if(userOptional.isEmpty()){
            throw new ResourceNotFoundException(NOT_FOUND);
        }
        userRepository.deleteById(id);
        return "Sucessfully Deleted";
    }
}
