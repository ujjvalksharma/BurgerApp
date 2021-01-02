package com.demo.burgerapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.burgerapp.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	@Query(value="Select * from User where email=?1 and password=?2",nativeQuery = true)
	public User findUserByEmailAndPassword(String email,String password);
}
