package com.Talentum.TalentumApplication.Services;

import com.Talentum.TalentumApplication.Exception.ResourceNotFoundException;
import com.Talentum.TalentumApplication.Model.Category;
import com.Talentum.TalentumApplication.Model.Job;
import com.Talentum.TalentumApplication.Repository.CategoryRepository;
import com.Talentum.TalentumApplication.Repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublicService {

    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private CategoryRepository categoryRepo;

    public Category addCategory(Category category) {
        return categoryRepo.save(category);
    }

    public Job getJob(Long id) {
        return jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found"));
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public List<Category> getAllCategories() {
        return categoryRepo.findAll();
    }
}
