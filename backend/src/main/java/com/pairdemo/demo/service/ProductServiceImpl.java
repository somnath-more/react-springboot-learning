package com.pairdemo.demo.service;

import com.pairdemo.demo.dto.ProductDto;
import com.pairdemo.demo.entity.Product;
import com.pairdemo.demo.repository.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.pairdemo.demo.utils.Constants.ID_NOT_FOUND;
import static com.pairdemo.demo.utils.Constants.SUCESS_DELETE;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService{

    private final ProductRepository productRepository;

    private final ModelMapper modelMapper;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository, ModelMapper modelMapper) {
        this.productRepository = productRepository;
        this.modelMapper = modelMapper;
    }

       @Override
    public List<ProductDto> searchProductByName(String name) {
        List<Product> productList = productRepository.findByName(name);
//        System.out.println(productList);
//        return productList.stream().map(product -> modelMapper.map(product,ProductDto.class)).collect(Collectors.toList());
        return productList.stream().map(product -> modelMapper.map(product, ProductDto.class)).filter(productDto -> productDto.getName().equalsIgnoreCase(name)).collect(Collectors.toList());
    }

    @Override
    public ProductDto createProduct(ProductDto productDto) {
        Product product = modelMapper.map(productDto, Product.class);
        Product product1 = productRepository.save(product);
        return modelMapper.map(product, ProductDto.class);
    }
    
        @Override
    public String deleteProduct(Long id) {
        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isEmpty()) {
            throw new ResourceNotFoundException(ID_NOT_FOUND);
        }
        productRepository.deleteById(id);
        return SUCESS_DELETE;
    }
}
