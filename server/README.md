
```
server
├─ .mvn
│  └─ wrapper
│     └─ maven-wrapper.properties
├─ bin
│  ├─ .mvn
│  │  └─ wrapper
│  │     └─ maven-wrapper.properties
│  ├─ mvnw
│  ├─ mvnw.cmd
│  ├─ pom.xml
│  └─ src
│     ├─ main
│     │  ├─ java
│     │  │  └─ com
│     │  │     └─ Talentum
│     │  │        └─ TalentumApplication
│     │  │           ├─ Controller
│     │  │           │  ├─ Comapny
│     │  │           │  │  └─ Company_controller.class
│     │  │           │  └─ User
│     │  │           │     └─ User_controller.class
│     │  │           ├─ Model
│     │  │           │  ├─ CompanyEntity.class
│     │  │           │  ├─ JobApplication.class
│     │  │           │  ├─ Jobcategory.class
│     │  │           │  ├─ JobEntity.class
│     │  │           │  └─ UserEntity.class
│     │  │           ├─ Repository
│     │  │           │  └─ Company_Reprosity.class
│     │  │           └─ TalentumApplication.class
│     │  └─ resources
│     │     └─ application.properties
│     └─ test
│        └─ java
│           └─ com
│              └─ Talentum
│                 └─ TalentumApplication
│                    └─ TalentumApplicationTests.class
├─ mvnw
├─ mvnw.cmd
├─ pom.xml
└─ src
   ├─ main
   │  ├─ java
   │  │  └─ com
   │  │     └─ Talentum
   │  │        └─ TalentumApplication
   │  │           ├─ config
   │  │           │  ├─ SecurityConfig.java
   │  │           │  └─ WebConfig.java
   │  │           ├─ controller
   │  │           │  ├─ AdminController.java
   │  │           │  ├─ AuthController.java
   │  │           │  ├─ CategoryController.java
   │  │           │  ├─ CompanyController.java
   │  │           │  ├─ JobApplicationController.java
   │  │           │  ├─ JobController.java
   │  │           │  ├─ PublicController.java
   │  │           │  └─ UserController.java
   │  │           ├─ exception
   │  │           │  └─ ResourceNotFoundException.java
   │  │           ├─ model
   │  │           │  ├─ Admin.java
   │  │           │  ├─ Category.java
   │  │           │  ├─ Company.java
   │  │           │  ├─ Job.java
   │  │           │  ├─ JobApplication.java
   │  │           │  ├─ LoginRequest.java
   │  │           │  ├─ SavedJob.java
   │  │           │  └─ User.java
   │  │           ├─ repository
   │  │           │  ├─ AdminRepository.java
   │  │           │  ├─ CategoryRepository.java
   │  │           │  ├─ CompanyRepository.java
   │  │           │  ├─ JobApplicationRepository.java
   │  │           │  ├─ JobRepository.java
   │  │           │  ├─ savedJobRepository.java
   │  │           │  └─ UserRepository.java
   │  │           ├─ service
   │  │           │  ├─ AdminService.java
   │  │           │  ├─ AuthService.java
   │  │           │  ├─ CategoryService.java
   │  │           │  ├─ CompanyService.java
   │  │           │  ├─ JobApplicationService.java
   │  │           │  ├─ JobService.java
   │  │           │  ├─ PublicService.java
   │  │           │  └─ UserService.java
   │  │           ├─ TalentumApplication.java
   │  │           └─ utils
   │  │              └─ JWTUtil.java
   │  └─ resources
   │     ├─ application.properties
   │     └─ META-INF
   │        └─ additional-spring-configuration-metadata.json
   └─ test
      └─ java
         └─ com
            └─ Talentum
               └─ TalentumApplication
                  └─ TalentumApplicationTests.java

```