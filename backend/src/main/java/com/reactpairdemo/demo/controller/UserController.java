package com.reactpairdemo.demo.controller;

import com.reactpairdemo.demo.dto.UserDto;
import com.reactpairdemo.demo.entity.User;
import com.reactpairdemo.demo.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping()
    public ResponseEntity<List<UserDto>>  getAllUsers() {

        return  new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }
   @PostMapping
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody UserDto user) {
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.CREATED);
    }

   @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
       return new ResponseEntity<>(userService.getUserById(id), HttpStatus.OK);
    }

   @PutMapping("/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable Long id,@Valid @RequestBody UserDto userDto) {
       return new ResponseEntity<>(userService.updateUser(id,userDto), HttpStatus.OK);
    }

   @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
       return new ResponseEntity<>(userService.deleteUser(id), HttpStatus.OK);
    }
}
