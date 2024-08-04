package com.Talentum.TalentumApplication.Services;

import com.Talentum.TalentumApplication.Exception.ResourceNotFoundException;
import com.Talentum.TalentumApplication.Model.Category;
import com.Talentum.TalentumApplication.Model.Company;
import com.Talentum.TalentumApplication.Model.Job;
import com.Talentum.TalentumApplication.Model.SavedJob;
import com.Talentum.TalentumApplication.Repository.CategoryRepository;
import com.Talentum.TalentumApplication.Repository.CompanyRepository;
import com.Talentum.TalentumApplication.Repository.JobRepository;
import com.Talentum.TalentumApplication.Repository.savedJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private savedJobRepository savedJobRepository;

    public Job createJob(Job job, Long categoryId, Long companyId) {
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new ResourceNotFoundException("Company not found"));
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
        job.setCompany(company);
        job.setCategory(category);
        return jobRepository.save(job);
    }

    public List<Job> getAllCompanyJobs(Long companyId) {
        return jobRepository.findByCompanyId(companyId);
    }

    public String deleteJobById(Long jobId) {
        try {
            SavedJob savedJob = savedJobRepository.findByjobId(jobId);
            if (savedJob != null) {
                savedJobRepository.delete(savedJob);
            }
        } catch (Exception e) {
            System.out.println(e);
        }

        try {
            SavedJob savedJob = savedJobRepository.findByjobId(jobId);
            if (savedJob != null) {
                savedJobRepository.delete(savedJob);
            }
        } catch (Exception e) {
            System.out.println(e);
        }

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("The job is not found"));
        jobRepository.delete(job);
        return "Deleted successfully";
    }

    public Job updateJob(Long jobId, Job updatedJob) {
        try {
            Job existingJob = jobRepository.findById(jobId)
                    .orElseThrow(() -> new RuntimeException("Job not found"));

            existingJob.setTitle(updatedJob.getTitle());
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

            return jobRepository.save(existingJob);
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityViolationException("Cannot update job: " + e.getMessage());
        } catch (RuntimeException e) {
            throw new RuntimeException("Job not found: " + e.getMessage());
        }
    }
}
