package com.Talentum.TalentumApplication.Controller.Public_controller;

import com.Talentum.TalentumApplication.Exception.ResourceNotFoundException;
import com.Talentum.TalentumApplication.Model.Category;
import com.Talentum.TalentumApplication.Model.Job;
import com.Talentum.TalentumApplication.Services.PublicService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class All_actor {

    private final PublicService publicService;

    public All_actor(PublicService publicService) {
        this.publicService = publicService;
    }

    // Add Category
    @PostMapping("/addCategory")
    public ResponseEntity<Category> addCategory(@RequestBody Category category) {
        Category savedCategory = publicService.addCategory(category);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }

    // Get Job
    @GetMapping("/jobs/{id}")
    public ResponseEntity<Job> getJob(@PathVariable Long id) {
        try {
            Job job = publicService.getJob(id);
            return ResponseEntity.ok(job);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    // Get all jobs
    @GetMapping("/jobs")
    public ResponseEntity<List<Job>> getAllJobs() {
        try {
            List<Job> jobs = publicService.getAllJobs();
            return ResponseEntity.ok(jobs);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // Get all Categories
    @GetMapping("/allcategory")
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> allCategories = publicService.getAllCategories();
        return ResponseEntity.ok(allCategories);
    }
}
