package com.security.user.controller;

import com.security.user.dto.ProductDto;
import com.security.user.dto.WatchlistDto;
import com.security.user.repo.WatchlistRepository;
import com.security.user.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/store")
@CrossOrigin
public class ProductController {
    @Autowired
    private ProductService productService;


    @GetMapping
    public List<ProductDto> getAllProducts() {
        return this.productService.getAllProducts();
    }

    @PostMapping
    public String saveWatchlist(@RequestBody WatchlistDto watchlistDto) {
        return productService.saveWatchlist(watchlistDto);
    }

    @GetMapping("/watchlist")
    public List<WatchlistDto> getAllWatchlists() {
        return this.productService.getAllWatchlists();
    }
}
