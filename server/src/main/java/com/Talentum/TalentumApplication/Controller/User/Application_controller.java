package com.Talentum.TalentumApplication.Controller.User;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.Talentum.TalentumApplication.Model.JobApplication;
import com.Talentum.TalentumApplication.Service.ApplicationService;



@Controller
public class Application_controller {
	
	@Autowired
	private ApplicationService applicationService;

	@GetMapping("/apply")
    public String showApplicationForm() {
        return "apply"; 
    }

    @PostMapping("/submitApplication")
    public String submitApplication(
//            @RequestParam("firstName") String firstName,
//            @RequestParam("lastName") String lastName,
//            @RequestParam("email") String email,
//            @RequestParam("phoneNumber") String phoneNumber,
            @RequestParam("status") String status,
            @RequestParam("cvFile") MultipartFile cvFile,
            Model model
            ) {
            

        JobApplication application = new JobApplication();
//        application.setFirstName(firstName);
//        application.setLastName(lastName);
//        application.setEmail(email);
//        application.setPhoneNumber(phoneNumber);
          application.setStatus(status);
      
        
        try {
            applicationService.saveApplication(application, cvFile);
            model.addAttribute("message", "Application submitted successfully!");
        } catch (IOException e) {
            model.addAttribute("message", "Failed to submit application.");
        }

        

        return "apply"; 
    }
}
	

