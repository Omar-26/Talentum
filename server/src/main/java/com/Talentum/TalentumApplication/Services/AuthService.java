package com.Talentum.TalentumApplication.Services;


import com.Talentum.TalentumApplication.JwtToken.JWT_Utility;
import com.Talentum.TalentumApplication.Model.Admin;
import com.Talentum.TalentumApplication.Model.Company;
import com.Talentum.TalentumApplication.Model.LoginRequest;
import com.Talentum.TalentumApplication.Model.User;
import com.Talentum.TalentumApplication.Repository.AdminReprositry;
import com.Talentum.TalentumApplication.Repository.CompanyRepository;
import com.Talentum.TalentumApplication.Repository.JobRepository;
import com.Talentum.TalentumApplication.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Map;

@Service
public class AuthService {

    private final CompanyRepository companyRepository;
    private final UserRepository userRepository;
    private final JobRepository jobRepository;
    private final JWT_Utility jwtUtility;
    private final AdminReprositry adminRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(CompanyRepository companyRepository, UserRepository userRepository, JobRepository jobRepository, JWT_Utility jwtUtility, AdminReprositry adminRepository, PasswordEncoder passwordEncoder) {
        this.companyRepository = companyRepository;
        this.userRepository = userRepository;
        this.jobRepository = jobRepository;
        this.jwtUtility = jwtUtility;
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email is already taken");
        }
        if (user.getPassword().length() < 7) {
            throw new RuntimeException("Password must be at least 7 characters long");
        }

        User newUser = new User();
        newUser.setCreatedAt(LocalDate.now());
        newUser.setDateOfBirth(user.getDateOfBirth());
        newUser.setEmail(user.getEmail());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setPhoneNumber(user.getPhoneNumber());
        newUser.setUsername(user.getUsername());
        userRepository.save(newUser);
        return newUser;
    }

    public Company registerCompany(Company company) {
        if (companyRepository.existsByEmail(company.getEmail())) {
            throw new RuntimeException("Email is already taken");
        }
        if (company.getPassword().length() < 7) {
            throw new RuntimeException("Password must be at least 7 characters long");
        }

        Company newCompany = new Company();
        newCompany.setCreatedAt(LocalDate.now());
        newCompany.setDescription(company.getDescription());
        newCompany.setEmail(company.getEmail());
        newCompany.setIndustry(company.getIndustry());
        newCompany.setLocation(company.getLocation());
        newCompany.setName(company.getName());
        newCompany.setPassword(passwordEncoder.encode(company.getPassword()));
        newCompany.setUsername(company.getUsername());
        companyRepository.save(newCompany);
        return newCompany;
    }

    public Map<String, Object> login(LoginRequest data) {
        String email = data.getEmail();
        String password = data.getPassword();

        User user = userRepository.findAccountByEmail(email);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
           // String token = jwtUtility.generateToken(email, "user");
            return Map.of("id", user.getId(), "role", "user"/* "token", token*/);
        }

        Company company = companyRepository.findByEmail(email);
        if (company != null && passwordEncoder.matches(password, company.getPassword())) {
           // String token = jwtUtility.generateToken(email, "Company");
            return Map.of("id", company.getId(), "role", "Company"/* "token", token */);
        }

        Admin admin = adminRepository.findByEmail(email);
        if (admin != null && passwordEncoder.matches(password, admin.getPassword())) {
         //   String token = jwtUtility.generateToken(email, "admin");
            return Map.of("id", admin.getId(), "role", "admin"/* "token", token */);
        }

        throw new RuntimeException("Invalid email or password");
    }
}
