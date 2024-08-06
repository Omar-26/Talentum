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
}
