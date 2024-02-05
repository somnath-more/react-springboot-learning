package com.reactpairdemo.demo.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ExplitBillDto {
    private List<Long> userId;
}