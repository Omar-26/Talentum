package com.Talentum.TalentumApplication.Service;

import com.Talentum.TalentumApplication.payload.LoginDto;
import com.Talentum.TalentumApplication.payload.UserDTO;
import com.Talentum.TalentumApplication.Service.LoginMesage;

public interface UserService {
    String addUser(UserDTO  userDTO);
    LoginMesage loginUser(LoginDto loginDTO);
}
