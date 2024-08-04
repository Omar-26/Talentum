package com.Talentum.TalentumApplication.Controller.Admin;

import com.Talentum.TalentumApplication.Model.Company;
import com.Talentum.TalentumApplication.Model.User;
import com.Talentum.TalentumApplication.Services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/all-company")
    public List<Company> getAllCompanies() {
        return adminService.getAllCompanies();
    }

    @GetMapping("/all-users")
    public List<User> getAllUsers() {
        return adminService.getAllUsers();
    }

    @DeleteMapping("/del-company/{comp_id}")
    public ResponseEntity<?> deleteCompany(@PathVariable("comp_id") Long companyId) {
        adminService.deleteCompany(companyId);
        return ResponseEntity.status(HttpStatus.OK).body("Company deleted successfully with ID: " + companyId);
    }
}
