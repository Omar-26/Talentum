package com.Talentum.TalentumApplication.Controller.User;

import com.Talentum.TalentumApplication.Exception.ResourceNotFoundException;
import com.Talentum.TalentumApplication.Model.Job;
import com.Talentum.TalentumApplication.Model.User;
import com.Talentum.TalentumApplication.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class User_controller {

    @Autowired
    private UserService userService;

    @PostMapping("/save_job/{userId}/{jobId}")
    public ResponseEntity<String> saveJob(@PathVariable Long userId, @PathVariable Long jobId) {
        userService.saveJob(userId, jobId);
        return ResponseEntity.status(HttpStatus.CREATED).body("Job saved successfully.");
    }

    @GetMapping("/saved-jobs/{userId}")
    public ResponseEntity<List<Job>> getAllSavedJobs(@PathVariable("userId") Long userId) {
        try {
            List<Job> jobs = userService.getAllSavedJobs(userId);
            if (jobs.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(jobs);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/profile/{id}")
    public ResponseEntity<User> getProfile(@PathVariable Long id) {
        try {
            User user = userService.getProfile(id);
            return ResponseEntity.ok(user);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @DeleteMapping("/saved-jobs/{user_id}/{job_id}")
    public ResponseEntity<String> deleteSavedJob(@PathVariable Long job_id, @PathVariable Long user_id) {
        try {
            userService.deleteSavedJob(job_id,user_id);
            return ResponseEntity.ok("Deleted Successfully");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Saved job not found");
        }
    }

    @GetMapping("/cat-jobs/{catId}")
    public ResponseEntity<List<Job>> getAllJobsByCategory(@PathVariable Long catId) {
        List<Job> jobs = userService.getAllJobsByCategory(catId);
        return ResponseEntity.ok(jobs);
    }
}
