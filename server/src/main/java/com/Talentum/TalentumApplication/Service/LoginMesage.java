package com.Talentum.TalentumApplication.Service;

import lombok.Getter;

@Getter
public class LoginMesage {
    String message;
    Boolean status;

    public void setMessage(String message) {
        this.message = message;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }
    public LoginMesage(String message, Boolean status) {
        this.message = message;
        this.status = status;
    }
}
