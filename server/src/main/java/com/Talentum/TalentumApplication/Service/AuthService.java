package com.Talentum.TalentumApplication.service;


import com.Talentum.TalentumApplication.model.Admin;
import com.Talentum.TalentumApplication.model.Company;
import com.Talentum.TalentumApplication.model.LoginRequest;
import com.Talentum.TalentumApplication.model.User;
import com.Talentum.TalentumApplication.repository.AdminRepository;
import com.Talentum.TalentumApplication.repository.CompanyRepository;
import com.Talentum.TalentumApplication.repository.UserRepository;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Map;

@Service
public class AuthService {

    private final CompanyRepository companyRepository;
    private final UserRepository userRepository;
    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(CompanyRepository companyRepository, UserRepository userRepository, AdminRepository adminRepository, PasswordEncoder passwordEncoder) {
        this.companyRepository = companyRepository;
        this.userRepository = userRepository;
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // Register
    // Register User
    public User registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email is already taken");
        }
        if (user.getPassword().length() < 8) {
            throw new RuntimeException("Password must be at least 8 characters long");
        }
        User newUser = new User();
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setUsername(user.getUsername());
        newUser.setEmail(user.getEmail());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        newUser.setPhoneNumber(user.getPhoneNumber());
        newUser.setDateOfBirth(user.getDateOfBirth());
        newUser.setCreatedAt(LocalDate.now());
        userRepository.save(newUser);
        return newUser;
    }

    // Register Company
    public Company registerCompany(Company company, MultipartFile logoFile) throws IOException {
        if (companyRepository.existsByEmail(company.getEmail())) {
            throw new RuntimeException("Email is already taken");
        }
        if (companyRepository.existsByName(company.getName())) {
            throw new RuntimeException("Company name is already taken");
        }
        if (company.getPassword().length() < 8) {
            throw new RuntimeException("Password must be at least 8 characters long");
        }
        Company newCompany = new Company();
        newCompany.setName(company.getName());
        newCompany.setEmail(company.getEmail());
        newCompany.setIndustry(company.getIndustry());
        newCompany.setLocation(company.getLocation());
        newCompany.setDescription(company.getDescription());
        newCompany.setPassword(passwordEncoder.encode(company.getPassword()));
        if (logoFile != null && !logoFile.isEmpty()) {
            newCompany.setLogo(logoFile.getBytes());
        }
        newCompany.setCreatedAt(LocalDate.now());
        companyRepository.save(newCompany);
        return newCompany;
    }

    // Login
    public Map<String, Object> login(LoginRequest body) {
        String email = body.getEmail();
        String password = body.getPassword();
        User user = userRepository.findAccountByEmail(email);
        if (user != null) {
            if (passwordEncoder.matches(password, user.getPassword()) || password.equals(user.getPassword())) {
                return Map.of("id", user.getId(), "role", "user");
            } else {
                throw new RuntimeException("Incorrect password");
            }
        }
        Company company = companyRepository.findByEmail(email);
        if (company != null) {
            if (passwordEncoder.matches(password, company.getPassword()) || password.equals(company.getPassword())) {
                return Map.of("id", company.getId(), "role", "Company");
            } else {
                throw new RuntimeException("Incorrect password");
            }
        }
        Admin admin = adminRepository.findByEmail(email);
        if (admin != null) {
            if (passwordEncoder.matches(password, admin.getPassword()) || password.equals(admin.getPassword())) {
                return Map.of("id", admin.getId(), "role", "admin");
            } else {
                throw new RuntimeException("Incorrect password");
            }
        }
        throw new RuntimeException("Email not found");
    }
}