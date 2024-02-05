package com.reactpairdemo.demo.dto;

import lombok.Builder;
import lombok.Data;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {
    private Long id;
    private String email;
    private String password;
    private String name;
    private Double contryPercentage;
    private Long contryPayment;
}
