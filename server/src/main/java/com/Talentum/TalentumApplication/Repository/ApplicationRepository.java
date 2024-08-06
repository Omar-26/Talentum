package com.Talentum.TalentumApplication.repository;

import org.springframework.stereotype.Repository;
import com.Talentum.TalentumApplication.model.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ApplicationRepository extends JpaRepository<JobApplication,Long> {

}
