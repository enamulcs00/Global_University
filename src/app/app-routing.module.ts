import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { Section1Component } from './component/application-form/section1/section1.component';
import { Section2Component } from './component/application-form/section2/section2.component';
import { Section3Component } from './component/application-form/section3/section3.component';
import { Section5Component } from './component/application-form/section5/section5.component';
import { Section4Component } from './component/application-form/section4/section4.component';
import { Section6Component } from './component/application-form/section6/section6.component';
import { Section7Component } from './component/application-form/section7/section7.component';
import { Section8Component } from './component/application-form/section8/section8.component';
import { Section9Component } from './component/application-form/section9/section9.component';
import { Section10Component } from './component/application-form/section10/section10.component';
import { Section11Component } from './component/application-form/section11/section11.component';
import { Section12Component } from './component/application-form/section12/section12.component';
import { Section13Component } from './component/application-form/section13/section13.component';
import { Section14Component } from './component/application-form/section14/section14.component';
import { Section15Component } from './component/application-form/section15/section15.component';
import { ApplicationFormPreviewComponent } from './component/application-form/application-form-preview/application-form-preview.component';
import { MatchingUniversitiesComponent } from './component/application-form/matching-universities/matching-universities.component';
import { DraftFormComponent } from './component/dashboard/draft-form/draft-form.component';
import { ViewFormComponent } from './component/application-form/view-form/view-form.component';
import { ApplicationProgressComponent } from './component/dashboard/application-progress/application-progress.component';
import { ViewProgressComponent } from './component/dashboard/view-progress/view-progress.component';
import { ReportComponent } from './component/dashboard/report/report.component';
import { MyProfileComponent } from './component/profile/my-profile/my-profile.component';
import { ChangePasswordComponent } from './component/profile/change-password/change-password.component';
import { CreateUsersComponent } from './component/profile/create-users/create-users.component';
import { ManageUsersComponent } from './component/profile/manage-users/manage-users.component';
import { MySubscriptionComponent } from './component/profile/my-subscription/my-subscription.component';
import { SubscriptionHistoryComponent } from './component/profile/subscription-history/subscription-history.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'draft-form', component: DraftFormComponent},
  { path: 'application-progress', component: ApplicationProgressComponent},
  { path: 'view-progress', component : ViewProgressComponent},
  { path: 'report', component : ReportComponent},

  { path: 'my-profile', component : MyProfileComponent},
  { path: 'change-password', component : ChangePasswordComponent},
  { path: 'create-users', component : CreateUsersComponent},
  { path: 'manage-users', component : ManageUsersComponent},
  { path: 'my-subscription', component : MySubscriptionComponent},
  { path: 'subscription-history', component : SubscriptionHistoryComponent},


  { path: 'section1', component: Section1Component},
  { path: 'section2', component: Section2Component},
  { path: 'section3', component: Section3Component},
  { path: 'section4', component: Section4Component},
  { path: 'section5', component: Section5Component},
  { path: 'section6', component: Section6Component},
  { path: 'section7', component: Section7Component},
  { path: 'section8', component: Section8Component},
  { path: 'section9', component: Section9Component},
  { path: 'section10', component: Section10Component},
  { path: 'section11', component: Section11Component},
  { path: 'section12', component: Section12Component},
  { path: 'section13', component: Section13Component},
  { path: 'section14', component: Section14Component},
  { path: 'section15', component: Section15Component},
  { path: 'application-form-preview', component: ApplicationFormPreviewComponent},
  { path: 'matching-universities', component: MatchingUniversitiesComponent},
  { path: 'view-form', component: ViewFormComponent},
  // { path: 'section3',
  // { path: 'section3',
  // { path: 'section3',
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
