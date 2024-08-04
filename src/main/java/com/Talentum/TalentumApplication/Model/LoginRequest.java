package com.Talentum.TalentumApplication.Model;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.Email;


public class LoginRequest {

    private String Email;
    private String password ;
    public LoginRequest(){}

    public LoginRequest(String email, String password) {
        Email = email;
        this.password = password;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
