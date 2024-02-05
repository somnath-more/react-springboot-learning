package com.reactpairdemo.demo.service;

import com.reactpairdemo.demo.dto.BillDto;
import com.reactpairdemo.demo.dto.UserDto;
import com.reactpairdemo.demo.dto.UserPay;
import com.reactpairdemo.demo.entity.User;
import com.reactpairdemo.demo.exceptions.UserException;
import com.reactpairdemo.demo.repo.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public UserDto createUser(UserDto userDto) {
        User userOptional = this.modelMapper.map(userDto, User.class);
            userRepository.save(userOptional);

        return modelMapper.map(userOptional, UserDto.class);
    }

    @Override
    public List<UserDto> splitExpense(Long payeeId, List<Long> userIds) {
        //here will get all userIds
        User user=userRepository.findById(payeeId).orElseThrow(()-> new UserException("Payee Id Not Found!!"));
        Long totalBill=user.getContryPayment();
        int totalCount=userIds.size();
        List<UserDto> allUsers=new ArrayList<>();
        for(int i=0;i<totalCount;i++){
            User user1=userRepository.findById(userIds.get(i)).orElseThrow(()-> new UserException("this  Id Not Exists!!"));
             user1.setContryPayment(totalBill/totalCount);
             user1.setContryPercentage((double)100/totalCount);
             userRepository.save(user1);
             allUsers.add(this.modelMapper.map(user1, UserDto.class));
        }

        return allUsers;
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> userList = userRepository.findAll();
        return userList.stream().map(user -> modelMapper.map(user, UserDto.class)).collect(Collectors.toList());
    }

    @Override
    public UserDto payBill(Long userId, UserPay totalBill) {
        User user = userRepository.findById(userId).orElseThrow(() -> new UserException("Given Id Not Found!!"));
        user.setContryPayment(totalBill.getTotalBill());
        User user1 = userRepository.save(user);
        return UserDto.builder().id(user1.getId()).contryPayment(user1.getContryPayment()).contryPercentage(user1.getContryPercentage()).name(user1.getName()).build();
    }
}
