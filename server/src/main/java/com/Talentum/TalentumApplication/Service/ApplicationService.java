package com.Talentum.TalentumApplication.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.Path;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.Talentum.TalentumApplication.Model.JobApplication;
import com.Talentum.TalentumApplication.Reporsitry.ApplicationRepository;



@Service
public class ApplicationService {
	
	@Autowired
	private ApplicationRepository applicationRepository;
	
	 private static final String UPLOADED_FOLDER = "uploads/";

	    public void saveApplication(JobApplication application, MultipartFile cvFile) throws IOException {
	        if (!cvFile.isEmpty()) {
	            String fileName = cvFile.getOriginalFilename();
	            Path path = Paths.get(UPLOADED_FOLDER + fileName);
	            Files.write(path, cvFile.getBytes());
	            application.setCvFileName(fileName);
	        }

	        applicationRepository.save(application);
	    }

}
