package com.Talentum.TalentumApplication.Services;

import com.Talentum.TalentumApplication.Exception.ResourceNotFoundException;
import com.Talentum.TalentumApplication.Model.*;
import com.Talentum.TalentumApplication.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private savedJobRepository savedJobRepository;

    public void saveJob(Long userId, Long jobId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found"));

        SavedJob savedJob = new SavedJob();
        savedJob.setUser(user);
        savedJob.setJob(job);
        savedJobRepository.save(savedJob);
    }

    public List<Job> getAllSavedJobs(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        List<SavedJob> savedJobs = savedJobRepository.findByUserId(user.getId());
        return savedJobs.stream()
                .map(SavedJob::getJob)
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
    }

    public User getProfile(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    public void deleteSavedJob(Long job_id,Long user_id) {



      List<SavedJob>  savedJobs =  savedJobRepository.findByUserId(user_id); // Delete by jobId
        SavedJob jobToDelete = null;
        for (SavedJob savedJob : savedJobs) {
            if (savedJob.getJob().getId().equals(job_id)) {
                savedJobRepository.delete(savedJob);
                    break;

            }
        }

    }

    public List<Job> getAllJobsByCategory(Long categoryId) {
        return jobRepository.findByCategoryId(categoryId);
    }
}
