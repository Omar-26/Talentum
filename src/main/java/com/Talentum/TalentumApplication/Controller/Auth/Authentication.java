package com.Talentum.TalentumApplication.Controller.Auth;

import com.Talentum.TalentumApplication.Model.Admin;
import com.Talentum.TalentumApplication.Model.Company;
import com.Talentum.TalentumApplication.Model.LoginRequest;
import com.Talentum.TalentumApplication.Model.User;
import com.Talentum.TalentumApplication.Services.AdminService;
import com.Talentum.TalentumApplication.Services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class Authentication {

    @Autowired
    private AuthService authenticationService;

    @PostMapping("/register-user")
    public ResponseEntity<?> addUser(@RequestBody @Validated User user) {
        try {
            User newUser = authenticationService.registerUser(user);
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/register-company")
    public ResponseEntity<?> registerCompany(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("username") String username,
            @RequestParam("password") String password,
            @RequestParam("description") String description,
            @RequestParam("location") String location,
            @RequestParam("industry") String industry,
            @RequestParam(value = "logo", required = false) MultipartFile logo) {

        Company company = new Company();
        company.setName(name);
        company.setEmail(email);
        company.setUsername(username);
        company.setPassword(password);
        company.setDescription(description);
        company.setLocation(location);
        company.setIndustry(industry);
        company.setCreatedAt(LocalDate.now());

        try {
            Company newCompany = authenticationService.registerCompany(company, logo);
            return new ResponseEntity<>(newCompany, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }



    @PostMapping("/login")
    public ResponseEntity<?> loginForm(@RequestBody LoginRequest data) {
        try {
            Map<String, Object> response = authenticationService.login(data);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}
