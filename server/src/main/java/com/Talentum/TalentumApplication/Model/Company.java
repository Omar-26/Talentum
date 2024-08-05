package com.Talentum.TalentumApplication.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.LocalDate;

@Setter
@Getter
@Entity(name = "company")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Name is required")
    private String name;

    @Email(message = "Email should be valid")
    private String email;

//    @NotBlank(message = "Username is required")
//    private String username;

    @NotBlank(message = "Password is required")
    private String password;
    private String description;
    private String location;
    private String industry;
   // private byte[] logo;
    private LocalDate createdAt;
public Company(){}
    public Company(String name, String email, String username, String password, String description, String location, String industry, LocalDate createdAt) {
        this.name = name;
        this.email = email;
//        this.username = username;
        this.password = password;
        this.description = description;
        this.location = location;
        this.industry = industry;
        this.createdAt = createdAt;
    }


}
