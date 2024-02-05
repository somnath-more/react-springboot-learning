package com.reactpairdemo.demo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalException {
    @ExceptionHandler(UserException.class)
    public ResponseEntity<ErrorResponse> handleUserException(Exception e){
        ErrorResponse errorResponse=ErrorResponse.builder().title(HttpStatus.NOT_FOUND.getReasonPhrase()).message(e.getMessage()).build();
        return new ResponseEntity<>(errorResponse,HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorResponse> handleIllegalArgumentException(IllegalArgumentException e){
        ErrorResponse errorResponse=ErrorResponse.builder().title(HttpStatus.NOT_FOUND.getReasonPhrase()).message(e.getMessage()).build();
        return new ResponseEntity<>(errorResponse,HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String,String> > handleMethodArgumentNotValidException(MethodArgumentNotValidException e){
        Map<String,String> rep=new HashMap<>();
        e.getBindingResult().getAllErrors().forEach(objectError -> {
            rep.put(((FieldError)objectError).getField(),objectError.getDefaultMessage());
        });

        return new ResponseEntity<>(rep,HttpStatus.BAD_REQUEST);
    }
}
