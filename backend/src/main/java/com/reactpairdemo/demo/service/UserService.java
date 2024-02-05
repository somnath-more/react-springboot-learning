package com.reactpairdemo.demo.service;

import com.reactpairdemo.demo.dto.ExplitBillDto;
import com.reactpairdemo.demo.dto.UserDto;

import java.util.List;

public interface UserService {
    UserDto createUser(UserDto userDto);
    List<UserDto> splitExpense(Long id, ExplitBillDto explitBillDto);

}
