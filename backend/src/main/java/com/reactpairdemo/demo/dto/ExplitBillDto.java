package com.reactpairdemo.demo.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ExplitBillDto {
    @NotNull(message = "Enter Atleast on UserId")
    private List<Long> userIds;
    @NotNull(message = "Enter Total party amount")
    private Double totalAmount;
}