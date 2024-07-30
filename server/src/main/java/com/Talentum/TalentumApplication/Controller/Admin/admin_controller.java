package com.Talentum.TalentumApplication.Controller.Admin;

import com.Talentum.TalentumApplication.Model.Company;
import com.Talentum.TalentumApplication.Model.Category;
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
public class admin_controller {
    @Autowired
    private CompanyRepository companyReprosity;

    @Autowired
    private CategoryRepository category_repo;

    @Autowired
    private UserRepository userRepro;

    @PostMapping("/adduser")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        // Set creation timestamp if not set

        User savedUser = userRepro.save(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @PostMapping("/addCompany")
    public ResponseEntity<Company> addCompany(@RequestBody Company newcompany) {
        Company savedCompany = companyReprosity.save(newcompany);
        return new ResponseEntity<>(savedCompany, HttpStatus.CREATED);
    }

    @PostMapping("/addCategory")
    public ResponseEntity<Category> addCategory(@RequestBody Category category) {
        Category savedCategory = category_repo.save(category);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }
}
