package com.Talentum.TalentumApplication.Controller.Comapny;

import com.Talentum.TalentumApplication.Exception.ResourceNotFoundException;
import com.Talentum.TalentumApplication.Model.Company;
import com.Talentum.TalentumApplication.Model.Job;
import com.Talentum.TalentumApplication.Model.Category;
import com.Talentum.TalentumApplication.Repository.CategoryRepository;
import com.Talentum.TalentumApplication.Repository.CompanyRepository;
import com.Talentum.TalentumApplication.Repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/company")
public class Company_controller {

    @Autowired
    CompanyRepository companyReprosity;
    @Autowired
    CategoryRepository CategoryRepo;
    @Autowired
    JobRepository jobRepository;

    @PostMapping("/add_job/{categoryId}/cat/{companyId}")
    public ResponseEntity<Job> createJob(@RequestBody Job job, @PathVariable Long categoryId, @PathVariable Long companyId) {
        Company company = companyReprosity.findById(companyId)
                .orElseThrow(() -> new ResourceNotFoundException("Company not found"));
        Category category = CategoryRepo.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
        job.setCompany(company);
        job.setCategory(category);
        Job newJob = jobRepository.save(job);

        return ResponseEntity.status(HttpStatus.CREATED).body(newJob);
    }
}