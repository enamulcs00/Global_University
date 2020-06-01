import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { TermsConditionsComponent } from './component/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { HowToApplyComponent } from './component/how-to-apply/how-to-apply.component';
import { FaqComponent } from './component/faq/faq.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: "/dashboard",
    pathMatch :"full"
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'how-to-apply',
    component: HowToApplyComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
