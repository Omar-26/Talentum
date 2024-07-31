package com.Talentum.TalentumApplication.payload;


import java.sql.Timestamp;
import java.sql.Date;



public class UserDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String phoneNumber;
    private String password;
    private Date dateOfBirth;
    private Timestamp createdAt;
    private String role="USER";

    public UserDTO() {}

    public UserDTO(Long id,String email,String lastName,String firstName,String username,String phoneNumber,String password,String role,Date dateOfBirth,Timestamp createdAt) {
        this.id=id;
        this.email=email;
        this.lastName=lastName;
        this.firstName=firstName;
        this.username=username;
        this.phoneNumber=phoneNumber;
        this.password=password;
        this.role=role;
        this.dateOfBirth=dateOfBirth;
        this.createdAt=createdAt;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}

