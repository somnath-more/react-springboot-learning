package com.pairdemo.demo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ProductDto {
    private Long id;
    @NotBlank(message = "Please enter a name")
    @Size(min = 3,message = "")
    private String name;
    @NotNull(message = "Please enter a price")
    private Double Price;
}
