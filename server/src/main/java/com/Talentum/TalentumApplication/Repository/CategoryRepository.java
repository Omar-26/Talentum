package com.Talentum.TalentumApplication.Repository;

import com.Talentum.TalentumApplication.Model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long> {
}
