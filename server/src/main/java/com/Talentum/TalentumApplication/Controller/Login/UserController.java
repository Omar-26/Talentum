package com.Talentum.TalentumApplication.Controller.Login;
import com.Talentum.TalentumApplication.Model.UserEntity;
import com.Talentum.TalentumApplication.Service.LoginMesage;
import com.Talentum.TalentumApplication.Service.UserService;
import com.Talentum.TalentumApplication.payload.LoginDto;
import com.Talentum.TalentumApplication.payload.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody UserDTO userDTO)
    {
        String id = userService.addUser(userDTO);
        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDto loginDTO)
    {
        LoginMesage loginMesage = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginMesage);
    }
}
