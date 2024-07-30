package com.Talentum.TalentumApplication.Service;

import com.Talentum.TalentumApplication.Model.UserEntity;
import com.Talentum.TalentumApplication.Reporsitry.UserRepository;
import com.Talentum.TalentumApplication.payload.LoginDto;
import com.Talentum.TalentumApplication.payload.UserDTO;
import com.Talentum.TalentumApplication.Service.LoginMesage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserIMPL implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserDTO userDTO) {
        UserEntity user = new UserEntity(
                userDTO.getFirstName(),
                userDTO.getLastName(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                userDTO.getPhoneNumber(),
                this.passwordEncoder.encode(userDTO.getPassword()),
                userDTO.getDateOfBirth(),
                userDTO.getCreatedAt(),
                userDTO.getRole()
        );
        userRepository.save(user);
        return user.getUsername();
    }

    @Override
    public LoginMesage loginUser(LoginDto loginDTO) {
        UserEntity user = userRepository.findByEmail(loginDTO.getEmail());
        if (user != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<UserEntity> userOpt = userRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (userOpt.isPresent()) {
                    return new LoginMesage("Login Success", true);
                } else {
                    return new LoginMesage("Login Failed", false);
                }
            } else {
                return new LoginMesage("Password Not Match", false);
            }
        } else {
            return new LoginMesage("Email not exists", false);
        }
    }
}
