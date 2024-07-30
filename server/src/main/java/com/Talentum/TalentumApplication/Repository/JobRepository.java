package com.Talentum.TalentumApplication.Repository;

import com.Talentum.TalentumApplication.Model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job,Long> {
}
