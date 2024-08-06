package com.Talentum.TalentumApplication.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Setter
@Getter
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

    public Job() {
    }

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

}