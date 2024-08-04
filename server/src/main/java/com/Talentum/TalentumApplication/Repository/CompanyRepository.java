package com.Talentum.TalentumApplication.Repository;

import com.Talentum.TalentumApplication.Model.Company;
import com.Talentum.TalentumApplication.Model.SavedJob;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
     boolean existsByEmail(String email);
     Company findByEmail(String email);

}
