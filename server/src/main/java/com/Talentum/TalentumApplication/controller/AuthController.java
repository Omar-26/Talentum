package com.Talentum.TalentumApplication.controller;

import com.Talentum.TalentumApplication.model.Company;
import com.Talentum.TalentumApplication.model.LoginRequest;
import com.Talentum.TalentumApplication.model.User;
import com.Talentum.TalentumApplication.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authenticationService;

    public AuthController(AuthService authenticationService) {
        this.authenticationService = authenticationService;
    }

    // Register
    // Register User
    @PostMapping("/register-user")
    public ResponseEntity<?> addUser(@RequestBody @Validated User user) {
        try {
            User newUser = authenticationService.registerUser(user);
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // Register Company
    @PostMapping("/register-company")
    public ResponseEntity<?> registerCompany(
            @RequestPart("company") @Validated Company company,
            @RequestPart("logo") MultipartFile logo) {
        try {
            Company newCompany = authenticationService.registerCompany(company, logo);
            return new ResponseEntity<>(newCompany, HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // Login
    // Login User or Company
    @PostMapping("/login")
    public ResponseEntity<?> loginForm(@RequestBody LoginRequest data) {
        try {
            Map<String, Object> response = authenticationService.login(data);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            if (e.getMessage().equals("Email not found")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
            } else if (e.getMessage().equals("Incorrect password")) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
            }
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}
