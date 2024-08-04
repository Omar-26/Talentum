import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from '../../../../core/services/company/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent {
  companyProfileForm: FormGroup;
  companyProfile: any;
  isEditing = false;

  constructor(private companyService: CompanyService, private fb: FormBuilder) {
    // Initialize the form with default values
    this.companyProfileForm = this.fb.group({
      companyName: [''],
      description: [''],
      location: [''],
      industry: [''],
      socialMediaLinks: this.fb.group({
        linkedIn: [''],
        twitter: [''],
      }),
      logo: [''],
      banner: [''],
    });
  }

  ngOnInit(): void {
    this.loadCompanyProfile();
  }

  // Load company profile from the service
  loadCompanyProfile(): void {
    this.companyService.getCompanyProfile().subscribe((profile: any) => {
      // Specify type if known
      this.companyProfile = profile;
      this.companyProfileForm.patchValue(profile);
    });
  }

  // Toggle between edit and view mode
  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  // Save the updated profile
  saveProfile(): void {
    if (this.companyProfileForm.valid) {
      this.companyService
        .updateCompanyProfile(this.companyProfileForm.value)
        .subscribe(() => {
          this.loadCompanyProfile();
          this.toggleEdit();
        });
    }
  }
}
