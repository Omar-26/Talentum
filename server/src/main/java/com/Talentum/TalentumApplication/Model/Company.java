package com.Talentum.TalentumApplication.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

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
    @NotBlank(message = "Location is required")
    private String location;
    @NotBlank(message = "Industry is required")
    private String industry;
    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters long")
    private String password;
    @NotBlank(message = "Description is required")
    private String description;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] logo;
    private LocalDate createdAt;

    public Company() {
    }

    public Company(String name, byte[] logo, String email, String password, String description, String location, String industry, LocalDate createdAt) {
        this.name = name;
        this.logo = logo;
        this.email = email;
        this.password = password;
        this.description = description;
        this.location = location;
        this.industry = industry;
        this.createdAt = createdAt;
    }


}
