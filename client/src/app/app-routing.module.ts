import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@features/auth/login/login.component';
import { SignupComponent } from '@features/auth/signup/signup.component';
import { AddJobComponent } from '@features/company/add-job/add-job.component';
import { CompanyComponent } from '@features/company/company/company.component';
import { HomeComponent } from '@features/home/home/home.component';
import { JobDetailsComponent } from '@features/jobs/pages/job-details/job-details.component';
import { ApplyToJobComponent } from '@features/user/apply-to-job/apply-to-job.component';
import { UserComponent } from '@features/user/user/user.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  //Lazy loading
  {
    path: 'jobs',
    loadChildren: () =>
      import('./features/jobs/jobs.module').then((m) => m.JobsModule),
  },
  { path: 'job-details', component: JobDetailsComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  { path: 'company', component: CompanyComponent },
  { path: 'user', component: UserComponent },
  { path: 'add-job', component: AddJobComponent },
  { path: 'apply-to-job', component: ApplyToJobComponent },

  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./features/auth/auth.module').then((m) => m.AuthModule),
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () =>
  //     import('./features/auth/auth.module').then((m) => m.AuthModule),
  // },

  // Eager loading --> not recommended
  // {
  //   path: 'jobs',
  //   component: JobsComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
