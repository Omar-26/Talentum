package com.Talentum.TalentumApplication.Repository;

import com.Talentum.TalentumApplication.Model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobRepository extends JpaRepository<Job,Long> {
    List<Job> findByCompanyId(Long companyId);
    List<Job> findByCategoryId(Long categoryId);
}
