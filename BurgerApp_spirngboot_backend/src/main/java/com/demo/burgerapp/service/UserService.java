package com.demo.burgerapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.burgerapp.repository.UserOrderRepository;
import com.demo.burgerapp.repository.UserRepository;
import com.demo.burgerapp.model.*;
@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserOrderRepository userOrderRepository;
	
	public List<User> getAllUser() {
		return userRepository.findAll();
	}
	
	public User getUser(int id) {
		User user = userRepository.findById(id)
                .orElse(new User());
		return user;
	}
	
	public User addUser(User user) {
		return userRepository.save(user);
	}

	public List<UserOrder> getAllUserOrder(int id) {
	
		User user = userRepository.findById(id)
                .orElse(new User());
		List<UserOrder> mainList = new ArrayList<UserOrder>();
		mainList.addAll(user.getUserOrder());
               return mainList;
	}
	

	public User getUserByEmailAndPassword(String email,String password) {
		
		return userRepository.findUserByEmailAndPassword(email,password);
		
	}
}
