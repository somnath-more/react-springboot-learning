package com.security.user.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

public class GlobalException {
    @ExceptionHandler({ProductNotFoundException.class})
    @ResponseBody
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<ErrorResponse> handleException(Exception e){
        ErrorResponse errorResponse=ErrorResponse.builder().message(e.getMessage()).title(HttpStatus.NOT_FOUND.getReasonPhrase()).build();
        return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }
}
