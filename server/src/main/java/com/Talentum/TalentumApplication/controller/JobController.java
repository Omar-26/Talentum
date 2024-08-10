package com.Talentum.TalentumApplication.controller;

import com.Talentum.TalentumApplication.model.Job;
import com.Talentum.TalentumApplication.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("api/jobs")
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping("/paginated")
    public Map<String, Object> getPaginatedJobs(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "6") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Job> jobPage = jobService.getPaginatedJobs(pageable);
        Map<String, Object> response = new HashMap<>();
        response.put("totalRecords", jobPage.getTotalElements());
        response.put("jobs", jobPage.getContent());
        return response;
    }
}