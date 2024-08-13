package com.Talentum.TalentumApplication.controller;

import com.Talentum.TalentumApplication.model.Job;
import com.Talentum.TalentumApplication.model.JobApplication;
import com.Talentum.TalentumApplication.model.User;
import com.Talentum.TalentumApplication.repository.JobApplicationRepository;
import com.Talentum.TalentumApplication.repository.JobRepository;
import com.Talentum.TalentumApplication.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;

@RestController
@RequestMapping("/api")
public class JobApplicationController {

    private final JobApplicationRepository jobApplicationRepository;

    private final UserRepository userRepository;

    private final JobRepository jobRepository;

    public JobApplicationController(JobApplicationRepository jobApplicationRepository, UserRepository userRepository, JobRepository jobRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
        this.userRepository = userRepository;
        this.jobRepository = jobRepository;
    }

    @PostMapping("/apply/{userId}/{jobId}")
    public ResponseEntity<?> applyForJob(@PathVariable Long userId,
                                         @PathVariable Long jobId,
                                         @RequestBody JobApplication jobApplication) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found"));
        try {
            JobApplication application = jobApplicationRepository.getByUserId(user.getId());
            if (application.getJob().getId().equals(jobId)) {
                return ResponseEntity.badRequest().body("you already submit the application");
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        try {
            jobApplication.setUser(user);
            jobApplication.setJob(job);
            jobApplication.setAppliedAt(new Timestamp(System.currentTimeMillis()));

            return ResponseEntity.ok(jobApplicationRepository.save(jobApplication));
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;

    }

}
