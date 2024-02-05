package com.reactpairdemo.demo.service;

import com.reactpairdemo.demo.dto.BillDto;
import com.reactpairdemo.demo.dto.UserDto;
import com.reactpairdemo.demo.dto.UserPay;

import java.util.List;

public interface UserService {
    UserDto createUser(UserDto userDto);
    List<UserDto> splitExpense(Long id, List<Long> ids);
   List<UserDto> getAllUsers();

  UserDto payBill(Long userId, UserPay totalBill);
}
