package com.reactpairdemo.demo.exceptions;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ErrorResponse {
    String message;
    String title;
}
