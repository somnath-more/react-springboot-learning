package com.security.user.exception;

import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ErrorResponse {
    public String message;
    public String title;


}
