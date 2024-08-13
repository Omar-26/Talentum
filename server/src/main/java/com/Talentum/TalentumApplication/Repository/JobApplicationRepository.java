package com.Talentum.TalentumApplication.repository;

import com.Talentum.TalentumApplication.model.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
    JobApplication getByUserId(Long userId);

}
