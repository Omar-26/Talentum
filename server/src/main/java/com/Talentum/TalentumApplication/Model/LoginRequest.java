package com.Talentum.TalentumApplication.Model;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.Email;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class LoginRequest {

    private String Email;
    private String password ;
    public LoginRequest(){}

    public LoginRequest(String email, String password) {
        Email = email;
        this.password = password;
    }

}
