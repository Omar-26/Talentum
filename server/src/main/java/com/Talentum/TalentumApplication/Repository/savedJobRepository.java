package com.Talentum.TalentumApplication.Repository;

import com.Talentum.TalentumApplication.Model.SavedJob;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface savedJobRepository extends JpaRepository<SavedJob,Long> {
    List<SavedJob> findByUserId(Long userId);

}
