package com.Talentum.TalentumApplication.controller;

import org.springframework.stereotype.Controller;


@Controller
public class ApplicationController {
	/*
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
            model model
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
    }*/
}
	

