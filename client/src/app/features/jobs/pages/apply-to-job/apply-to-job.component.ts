import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JobApplication } from '@core/models/job-application';
import { User } from '@core/models/user';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-apply-to-job',
  templateUrl: './apply-to-job.component.html',
  styleUrl: './apply-to-job.component.scss',
})
export class ApplyToJobComponent {
  jobId!: string | number;
  userId!: string;
  jobApplication!: JobApplication;
  applyToJobForm!: FormGroup;
  constructor(
    private router: ActivatedRoute,
    private storage: LocalStorageService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.jobId = this.router.snapshot.paramMap.get('job-id') || '0';
    this.userId = this.storage.getUserId();
    this.getUser();
    this.applyToJobForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      country: ['', Validators.required],
      availableStartDate: ['', Validators.required],
      reasonOfHire: ['', Validators.required],
      qualification: ['', Validators.required],
      linkedIn: ['', Validators.required],
      github: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  getUser(): void {
    this.userService.getUserProfile(this.userId).subscribe((user: User) => {
      this.applyToJobForm.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        status: 'pending',
      });
    });
  }

  onApplyToJob(): void {
    console.log(this.applyToJobForm.value);
  }
}
