package com.Talentum.TalentumApplication.Services;

import com.Talentum.TalentumApplication.Model.Category;
import com.Talentum.TalentumApplication.Model.Company;
import com.Talentum.TalentumApplication.Model.User;
import com.Talentum.TalentumApplication.Repository.CategoryRepository;
import com.Talentum.TalentumApplication.Repository.CompanyRepository;
import com.Talentum.TalentumApplication.Repository.JobRepository;
import com.Talentum.TalentumApplication.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class AdminService {

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JobRepository jobRepository;

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteCompany(Long companyId) {
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new RuntimeException("Company not found"));
        Long jobId = company.getId();
        jobRepository.deleteAllById(Collections.singleton(jobId));
        companyRepository.delete(company);
    }
}
