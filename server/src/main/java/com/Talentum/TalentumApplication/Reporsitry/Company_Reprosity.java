package com.Talentum.TalentumApplication.Reporsitry;

import com.Talentum.TalentumApplication.Model.JobEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Company_Reprosity extends JpaRepository<JobEntity, Long> {
}
