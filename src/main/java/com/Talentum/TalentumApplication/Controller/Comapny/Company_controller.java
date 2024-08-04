package com.Talentum.TalentumApplication.Controller.Comapny;

import com.Talentum.TalentumApplication.Exception.ResourceNotFoundException;
import com.Talentum.TalentumApplication.Model.Job;
import com.Talentum.TalentumApplication.Services.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/company")
public class Company_controller {

    @Autowired
    private CompanyService companyService;

    @PostMapping("/add_job/{categoryId}/cat/{companyId}")
    public ResponseEntity<Job> createJob(@RequestBody Job job, @PathVariable Long categoryId, @PathVariable Long companyId) {
        Job newJob = companyService.createJob(job, categoryId, companyId);
        return ResponseEntity.status(HttpStatus.CREATED).body(newJob);
    }

    @GetMapping("/jobs/{company_id}")
    public List<Job> getAllCompanyJobs(@PathVariable Long company_id) {
        return companyService.getAllCompanyJobs(company_id);
    }

    @DeleteMapping("/jobs/{job_id}")
    public ResponseEntity<String> deleteJobById(@PathVariable Long job_id) {
        try {
            String response = companyService.deleteJobById(job_id);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PutMapping("/jobs/{job_id}")
    public ResponseEntity<?> updateJob(@PathVariable long job_id, @RequestBody Job updatedJob) {
        try {
            Job savedJob = companyService.updateJob(job_id, updatedJob);
            return ResponseEntity.ok(savedJob);
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Cannot update job: " + e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Job not found: " + e.getMessage());
        }
    }
}
