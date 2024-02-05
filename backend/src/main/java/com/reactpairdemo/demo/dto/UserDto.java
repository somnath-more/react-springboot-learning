package com.reactpairdemo.demo.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class UserDto {
    private Long id;
    @NotNull(message = "Name must not be Null")
    @Size(min=4,message = "Enter valid Name")
    private String name;
    @NotNull(message = "Email must not be Null")
    @Email(message = "Invalid Email Format")
    private String email;
    @NotNull(message = "Password must not be Null")
    @Pattern(
            regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$",
            message = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit."
    )
    private String Password;
}
