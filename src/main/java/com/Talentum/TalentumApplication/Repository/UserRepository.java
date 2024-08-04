package com.Talentum.TalentumApplication.Repository;

import com.Talentum.TalentumApplication.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    boolean existsByEmail(String email);
    User findAccountByEmail (String email);

}
