package com.pairdemo.demo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFound(Exception e){
        ErrorResponse errorResponse=ErrorResponse.builder().message(e.getMessage()).title(HttpStatus.NOT_FOUND.getReasonPhrase()).build();
        return new ResponseEntity<>(errorResponse,HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String,String>> handleResourceNotFound(MethodArgumentNotValidException e){
        Map<String,String> resp=new HashMap<>();
        e.getBindingResult().getAllErrors().forEach(objectError -> {
            resp.put(((FieldError)objectError).getField(),objectError.getDefaultMessage());
        });


        return new ResponseEntity<>(resp,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorResponse> handleIllegalArgumentException(IllegalArgumentException e){
        ErrorResponse errorResponse=ErrorResponse.builder().message(e.getMessage()).title(HttpStatus.NOT_ACCEPTABLE.getReasonPhrase()).build();
        return new ResponseEntity<>(errorResponse,HttpStatus.NOT_ACCEPTABLE);
    }

}
