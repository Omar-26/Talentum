package com.Talentum.TalentumApplication.Controller.Admin;

import com.Talentum.TalentumApplication.Model.Category;
import com.Talentum.TalentumApplication.Model.Company;
import com.Talentum.TalentumApplication.Model.User;
import com.Talentum.TalentumApplication.Repository.CategoryRepository;
import com.Talentum.TalentumApplication.Repository.CompanyRepository;
import com.Talentum.TalentumApplication.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {
    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/addUser")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        // Set creation timestamp if not set
        User savedUser = userRepository.save(user);
        if (user.getCreatedAt() == null) {
            user.setCreatedAt(new java.sql.Timestamp(System.currentTimeMillis()));
        }
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @PostMapping("/addCompany")
    public ResponseEntity<Company> addCompany(@RequestBody Company newCompany) {
        Company savedCompany = companyRepository.save(newCompany);
        if (newCompany.getCreatedAt() == null) {
            newCompany.setCreatedAt(new java.sql.Timestamp(System.currentTimeMillis()));
        }
        return new ResponseEntity<>(savedCompany, HttpStatus.CREATED);
    }

    @PostMapping("/addCategory")
    public ResponseEntity<Category> addCategory(@RequestBody Category category) {
        Category savedCategory = categoryRepository.save(category);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }
}
