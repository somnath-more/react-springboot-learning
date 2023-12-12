package com.security.user.service;

import com.security.user.dto.ProductDto;
import com.security.user.dto.WatchlistDto;

import java.util.List;

public interface ProductService {
    public List<ProductDto> getAllProducts();
    public String saveWatchlist(WatchlistDto watchlistDto);
    public List<WatchlistDto> getAllWatchlists();
}
