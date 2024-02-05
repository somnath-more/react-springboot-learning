package com.reactpairdemo.demo.repo;

import com.reactpairdemo.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
