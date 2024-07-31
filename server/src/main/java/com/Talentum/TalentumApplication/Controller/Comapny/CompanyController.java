package com.Talentum.TalentumApplication.Controller.Comapny;

import com.Talentum.TalentumApplication.Exception.ResourceNotFoundException;
import com.Talentum.TalentumApplication.Model.Category;
import com.Talentum.TalentumApplication.Model.Company;
import com.Talentum.TalentumApplication.Model.Job;
import com.Talentum.TalentumApplication.Repository.CategoryRepository;
import com.Talentum.TalentumApplication.Repository.CompanyRepository;
import com.Talentum.TalentumApplication.Repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/company")
public class CompanyController {

    @Autowired
    CompanyRepository companyRepository;
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    JobRepository jobRepository;

    @PostMapping("/add_job/{category_id}/cat/{company_id}")
    public ResponseEntity<Job> createJob(@RequestBody Job job, @PathVariable Long category_id, @PathVariable Long company_id) {
        Company company = companyRepository.findById(company_id)
                .orElseThrow(() -> new ResourceNotFoundException("Company not found"));
        Category category = categoryRepository.findById(category_id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
        job.setCompany(company);
        job.setCategory(category);
        Job newJob = jobRepository.save(job);

        return ResponseEntity.status(HttpStatus.CREATED).body(newJob);
    }

    @GetMapping("/jobs/{company_id}")
    public List<Job> GetAllCompanyJob(@PathVariable Long company_id) {
        return jobRepository.findByCompanyId(company_id);
    }

    @DeleteMapping("/jobs/{job_id}")
    public String deleteJobById(@PathVariable Long job_id) {
        Job deljOB = jobRepository.findById(job_id).orElseThrow(() -> new RuntimeException("the job is not found "));
        jobRepository.delete(deljOB);
        return "deleted successfully";

    } // fourien key is not deleted before delete primary in company , saved-job

    @PutMapping("/jobs/{job_id}")
    public ResponseEntity<Job> updateJob(@PathVariable long job_id, @RequestBody Job updatedJob) {
        Job existingJob = jobRepository.findById(job_id).orElseThrow(() -> new RuntimeException(" job not found "));

        existingJob.setTitle(updatedJob.getTitle());
        existingJob.setCompany(updatedJob.getCompany());
        existingJob.setCategory(updatedJob.getCategory());
        existingJob.setType(updatedJob.getType());
        existingJob.setSalary(updatedJob.getSalary());
        existingJob.setLocation(updatedJob.getLocation());
        existingJob.setGender(updatedJob.getGender());
        existingJob.setDescription(updatedJob.getDescription());
        existingJob.setResponsibilities(updatedJob.getResponsibilities());
        existingJob.setQualifications(updatedJob.getQualifications());
        existingJob.setBenefits(updatedJob.getBenefits());
        existingJob.setExperience(updatedJob.getExperience());
        existingJob.setCreatedAt(updatedJob.getCreatedAt());
        Job savedJob = jobRepository.save(existingJob);

        return ResponseEntity.ok(savedJob);
    }
}