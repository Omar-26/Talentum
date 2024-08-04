package com.Talentum.TalentumApplication.Repository;

import com.Talentum.TalentumApplication.Model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminReprositry extends JpaRepository<Admin,Long> {
    Admin findByEmail(String email);

}
