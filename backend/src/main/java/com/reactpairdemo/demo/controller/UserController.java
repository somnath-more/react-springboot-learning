package com.reactpairdemo.demo.controller;

import com.reactpairdemo.demo.dto.BillDto;
import com.reactpairdemo.demo.dto.ExplitBillDto;
import com.reactpairdemo.demo.dto.UserDto;
import com.reactpairdemo.demo.dto.UserPay;
import com.reactpairdemo.demo.entity.User;
import com.reactpairdemo.demo.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static com.reactpairdemo.demo.utils.Constants.BASE_URL;

@RestController
@RequestMapping(BASE_URL)
@Slf4j
public class UserController
{
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        return new ResponseEntity<>(userService.createUser(userDto), HttpStatus.CREATED);

    }



    @PostMapping("/split-bill/{id}")
    public List<UserDto> payBill(@PathVariable Long id, @RequestBody ExplitBillDto explitBillDto) {
        log.info("bill splits to all user");
        return userService.splitExpense(id,explitBillDto.getUserId());
    }

    @GetMapping
    public List<UserDto> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("/{id}")
    public UserDto payAllBill(@PathVariable Long userId,@RequestBody UserPay totalBill) {
        log.info("give is associated user will pay bill");
        return userService.payBill(userId,totalBill);
    }
}
