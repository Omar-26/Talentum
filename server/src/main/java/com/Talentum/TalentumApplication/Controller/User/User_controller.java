package com.Talentum.TalentumApplication.Controller.User;

import com.Talentum.TalentumApplication.Model.JobEntity;
import com.Talentum.TalentumApplication.Reporsitry.Company_Reprosity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
@RestController
@RequestMapping("/api/v1/user")
public class User_controller {

    @Autowired
    Company_Reprosity reprosity ;
    @GetMapping("/job/{id}")
    public ResponseEntity<JobEntity> getJob(@PathVariable Long id){

       Optional<JobEntity> job = reprosity.findById(id);
        return job.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());


    }
}
