package com.security.user.service;

import com.security.user.dto.ProductDto;
import com.security.user.dto.WatchlistDto;
import com.security.user.entity.Product;
import com.security.user.entity.Watchlist;
import com.security.user.repo.ProductRepository;
import com.security.user.repo.WatchlistRepository;
import com.security.user.utils.Converters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WatchlistServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private WatchlistRepository watchlistRepository;
    @Autowired
    private Converters converters;

    @Override
    public List<ProductDto> getAllProducts() {
        List<Product> productList=productRepository.findAll();

        return productList.stream().map(product -> converters.productToDto(product)).collect(Collectors.toList());
    }

    @Override
    public String saveWatchlist(WatchlistDto watchlistDto) {
        Watchlist watchlist=watchlistRepository.save(converters.watchlistToEntity(watchlistDto));
        return "Saved SuccessFully";
    }

    @Override
    public List<WatchlistDto> getAllWatchlists() {
        List<Watchlist> watchlistList=watchlistRepository.findAll();

        return watchlistList.stream().map(watchlist -> converters.watchlistToDto(watchlist)).collect(Collectors.toList());
    }
}
