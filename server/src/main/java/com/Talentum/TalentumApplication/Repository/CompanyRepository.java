package com.Talentum.TalentumApplication.Repository;

import com.Talentum.TalentumApplication.Model.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}
