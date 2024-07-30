package com.Talentum.TalentumApplication.Controller.User;

import com.Talentum.TalentumApplication.Exception.ResourceNotFoundException;
import com.Talentum.TalentumApplication.Model.*;
import com.Talentum.TalentumApplication.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/user")
public class User_controller {

    @Autowired
    CompanyRepository companyReprosity ;
    @Autowired
    UserRepository userRepository;
    @Autowired
    JobRepository jobRepository;
    @Autowired
    CategoryRepository categoryRepo;
    @Autowired
    savedJobRepository savedJobRepository;

    @GetMapping("/jobs")
    public ResponseEntity<List<Job>> getAllJob() {
        try {
            List<Job> jobs = jobRepository.findAll();
            return ResponseEntity.ok(jobs);
        } catch (Exception e) {
            // Log the exception
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/jobs/{id}")
    public Job getJob(@PathVariable Long id){
        return jobRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("job not found"));

    }

    @PostMapping("/save_job/{userId}/{jobId}")
    public ResponseEntity<String> saveJob(@PathVariable Long userId, @PathVariable Long jobId) {
        // Fetch the user and job entities
        var user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        var job = jobRepository.findById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found"));

        // Create and save the saved_jobEntity
        SavedJob savedJob = new SavedJob();
        savedJob.setUser(user);
        savedJob.setJob(job);

        savedJobRepository.save(savedJob);

        return ResponseEntity.status(HttpStatus.CREATED).body("Job saved successfully.");
    }

    @GetMapping("/saved-jobs/{user_id}")
    public ResponseEntity<List<Job>> getAllSavedJobs(@PathVariable("user_id") Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        List<SavedJob> savedJobs = savedJobRepository.findByUserId(user.get().getId());
        if (savedJobs.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        List<Job> jobs = savedJobs.stream()
                .map(savedJob -> savedJob.getJob())
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        return ResponseEntity.ok(jobs);
    }




}
