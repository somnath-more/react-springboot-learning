package com.pairdemo.demo.service;

import com.pairdemo.demo.dto.ProductDto;

import java.util.List;

public interface ProductService {
   List<ProductDto> searchProductByName(String name);

   ProductDto createProduct(ProductDto productDto);
   String deleteProduct(Long id);
}
