package com.Talentum.TalentumApplication.repository;

import com.Talentum.TalentumApplication.model.SavedJob;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface savedJobRepository extends JpaRepository<SavedJob,Long> {
    List<SavedJob> findByUserId(Long userId);
    SavedJob findByjobId(Long jobId);
    void deleteByjobId(Long jobId); // Add this method



}
