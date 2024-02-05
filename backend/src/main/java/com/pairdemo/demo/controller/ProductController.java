package com.pairdemo.demo.controller;

import com.pairdemo.demo.dto.ProductDto;
import com.pairdemo.demo.entity.Product;
import com.pairdemo.demo.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.pairdemo.demo.utils.Constants.BASE_URL;

@RestController
@RequestMapping(BASE_URL)
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    @GetMapping("/search")
    public ResponseEntity<List<ProductDto>> searchProductByName(@RequestParam("name") String name) {
        return new ResponseEntity<>(productService.searchProductByName(name), HttpStatus.OK) ;
    }

    @PostMapping
    public ResponseEntity<ProductDto> createProduct(@Valid @RequestBody ProductDto productDto) {

        return new ResponseEntity<>(productService.createProduct(productDto), HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> createProduct(@PathVariable Long id) {

        return new ResponseEntity<>(productService.deleteProduct(id), HttpStatus.CREATED) ;
    }

}
