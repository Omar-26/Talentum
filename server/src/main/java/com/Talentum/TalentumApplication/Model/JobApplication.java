package com.Talentum.TalentumApplication.Model;

import jakarta.persistence.*;

import org.apache.catalina.User;

import java.security.Timestamp;

@Entity
public class JobApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name = "job_id", nullable = false)
    private JobEntity job;

    private String status;
    private Timestamp appliedAt;
    
    @Column(name = "cv")
    private String cvFileName;

    public String getCvFileName() {
		return cvFileName;
	}

	public void setCvFileName(String cvFileName) {
		this.cvFileName = cvFileName;
	}

	// Default constructor
    public JobApplication() {}

    // Parameterized constructor
    public JobApplication(UserEntity user, JobEntity job, String status, Timestamp appliedAt,String cvFileName) {
        this.user = user;
        this.job = job;
        this.status = status;
        this.appliedAt = appliedAt;
        this.cvFileName=cvFileName;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public JobEntity getJob() {
        return job;
    }

    public void setJob(JobEntity job) {
        this.job = job;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Timestamp getAppliedAt() {
        return appliedAt;
    }

    public void setAppliedAt(Timestamp appliedAt) {
        this.appliedAt = appliedAt;
    }
}

