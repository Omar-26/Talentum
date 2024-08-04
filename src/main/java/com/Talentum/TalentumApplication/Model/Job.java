package com.Talentum.TalentumApplication.Model;

import jakarta.persistence.*;

import java.sql.Timestamp;
@Entity
public class Job {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String title;

        @ManyToOne
        @JoinColumn(name = "company_id", nullable = false)
        private Company company;

        @ManyToOne
        @JoinColumn(name = "category_id", nullable = false)
        private Category category;

        private String type;
        private String salary;
        private String location;
        private String gender;
        private String description;
        private String responsibilities;
        private String qualifications;
        private String benefits;
        private String experience;
        private Timestamp createdAt;

        // Default constructor
        public Job() {}

        // Parameterized constructor
        public Job(String title, Company company, Category category, String type, String salary, String location, String gender, String description, String responsibilities, String qualifications, String benefits, String experience, Timestamp createdAt) {
            this.title = title;
            this.company = company;
            this.category = category;
            this.type = type;
            this.salary = salary;
            this.location = location;
            this.gender = gender;
            this.description = description;
            this.responsibilities = responsibilities;
            this.qualifications = qualifications;
            this.benefits = benefits;
            this.experience = experience;
            this.createdAt = createdAt;
        }
        // Getters and setters
        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public Company getCompany() {
            return company;
        }

        public void setCompany(Company company) {
            this.company = company;
        }

        public Category getCategory() {
            return category;
        }

        public void setCategory(Category category) {
            this.category = category;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public String getSalary() {
            return salary;
        }

        public void setSalary(String salary) {
            this.salary = salary;
        }

        public String getLocation() {
            return location;
        }

        public void setLocation(String location) {
            this.location = location;
        }

        public String getGender() {
            return gender;
        }

        public void setGender(String gender) {
            this.gender = gender;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getResponsibilities() {
            return responsibilities;
        }

        public void setResponsibilities(String responsibilities) {
            this.responsibilities = responsibilities;
        }

        public String getQualifications() {
            return qualifications;
        }

        public void setQualifications(String qualifications) {
            this.qualifications = qualifications;
        }

        public String getBenefits() {
            return benefits;
        }

        public void setBenefits(String benefits) {
            this.benefits = benefits;
        }

        public String getExperience() {
            return experience;
        }

        public void setExperience(String experience) {
            this.experience = experience;
        }

        public Timestamp getCreatedAt() {
            return createdAt;
        }

        public void setCreatedAt(Timestamp createdAt) {
            this.createdAt = createdAt;
        }

    }


