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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class Authentication {

    private final AuthService authenticationService;

    public Authentication(AuthService authenticationService) {
        this.authenticationService = authenticationService;
    }

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

    @PostMapping("/register-company")
    public ResponseEntity<?> registerCompany(@RequestBody @Validated Company company) {
        try {
            Company newCompany = authenticationService.registerCompany(company);
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
