import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '@core/models/company';
import { Job } from '@core/models/job';
import { AdminService } from '@core/services/admin/admin.service';
import { CompanyService } from '@core/services/company/company.service';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent implements OnInit {
  companyId!: string;
  role!: string;
  company!: Company;
  logoUrl!: string;
  createdJobs!: Job[];

  constructor(
    private route: ActivatedRoute,
    public storage: LocalStorageService,
    private adminService: AdminService,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.companyId = this.route.snapshot.paramMap.get('company-id') || '0';
    this.role = this.storage.getRole();
    this.getCompany();
    this.getCreatedJobs();
  }

  getCompany() {
    this.adminService.getCompanyById(this.companyId).subscribe((company) => {
      // Company
      this.company = company;
      // Company Logo
      this.adminService.getCompanyLogo(this.companyId).subscribe((blob) => {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.logoUrl = event.target.result;
        };
        reader.readAsDataURL(blob);
      });
    });
  }

  getCreatedJobs() {
    this.companyService
      .getCompanyJobs(this.companyId)
      .subscribe((jobs: Job[]) => (this.createdJobs = jobs.slice(0, 4)));
  }
  goTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
