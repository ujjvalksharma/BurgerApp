package com.demo.burgerapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.burgerapp.model.User;
import com.demo.burgerapp.model.UserOrder;
import com.demo.burgerapp.service.UserService;

@RestController
@RequestMapping("/User")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {

	@Autowired
	UserService userService;
	
	@PostMapping("/add")
	public User addUser(@RequestBody User user) {
		if( user.getUserOrder().size() > 0 )
	    {
	        user.getUserOrder().stream().forEach( order -> {
	        	order.setUser( user );
	        } );
	    }

		return userService.addUser(user);
	}
	
	@PostMapping("/addOrder/{id}")
	public User addProduct(@PathVariable(name = "id")int id,@RequestBody UserOrder userOrder) {
		User user=getUser(id);
		
		
		user.addUserOrder(userOrder);
		
		if( user.getUserOrder().size() > 0 )
	    {
	        user.getUserOrder().stream().forEach( order -> {
	        	order.setUser( user );
	        } );
	    }
		
		return userService.addUser(user);
	}
	
	@GetMapping("/findAll")
	public List<User> getAllUser() {
		return userService.getAllUser();
	}
	
	@GetMapping("/find/{id}")
	public User getUser(@PathVariable(name ="id" )int id) {
		return userService.getUser(id);
	}
	
	@GetMapping("/find/{email}/{password}")
	public User getUserByEmailAndPassword(@PathVariable(name ="email" )String email
			,@PathVariable(name ="password" )String password) {
		return userService.getUserByEmailAndPassword(email,password);
	}
	
	@GetMapping("/findAllOrder/{id}")
	public List<UserOrder> getAllUserOrder(@PathVariable(name ="id" )int id) {
   return userService.getAllUserOrder(id);

	}
}
