package com.Talentum.TalentumApplication.Controller.Comapny;

import com.Talentum.TalentumApplication.Model.JobEntity;
import com.Talentum.TalentumApplication.Reporsitry.Company_Reprosity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/company")
public class Company_controller {

    @Autowired Company_Reprosity  reprosity;
    @PostMapping("/add_job")
    public ResponseEntity<JobEntity> createJob(@RequestBody JobEntity job){

        JobEntity newJob = reprosity.save(job);
        return ResponseEntity.status(HttpStatus.CREATED).body(newJob);

    }




}
