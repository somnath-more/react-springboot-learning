package com.security.user.repo;

import com.security.user.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public  interface ProductRepository extends JpaRepository<Product ,Long> {
}
