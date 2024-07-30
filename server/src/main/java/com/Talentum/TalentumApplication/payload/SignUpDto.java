package com.Talentum.TalentumApplication.payload;

import lombok.Data;

import java.sql.Date;

@Data
public class SignUpDto {
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String password;
    private String confirmPassword;
    private Date DOB;
}