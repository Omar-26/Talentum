package com.Talentum.TalentumApplication.service;

import com.Talentum.TalentumApplication.model.Job;
import com.Talentum.TalentumApplication.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class JobService {

    private final JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public Page<Job> getPaginatedJobs(Pageable pageable) {
        return jobRepository.findAll(pageable);
    }
}