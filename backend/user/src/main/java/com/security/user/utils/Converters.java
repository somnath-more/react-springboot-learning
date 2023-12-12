package com.security.user.utils;

import com.security.user.dto.ProductDto;
import com.security.user.dto.WatchlistDto;
import com.security.user.entity.Product;
import com.security.user.entity.Watchlist;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Converters {
    @Autowired
    private ModelMapper modelMapper;

    public ProductDto productToDto(Product product){
        return modelMapper.map(product, ProductDto.class);

    }
    public Product productToEntity(ProductDto productDto){
        return modelMapper.map(productDto, Product.class);

    }
    public WatchlistDto watchlistToDto(Watchlist watchlist){
        return modelMapper.map(watchlist, WatchlistDto.class);

    }
    public Watchlist watchlistToEntity(WatchlistDto watchlist){
        return modelMapper.map(watchlist, Watchlist.class);

    }

}
