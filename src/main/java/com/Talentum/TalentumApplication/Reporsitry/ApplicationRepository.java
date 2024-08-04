package com.Talentum.TalentumApplication.Reporsitry;

import org.springframework.stereotype.Repository;
import com.Talentum.TalentumApplication.Model.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ApplicationRepository extends JpaRepository<JobApplication,Long> {

}
