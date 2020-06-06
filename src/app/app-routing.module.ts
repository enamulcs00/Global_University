import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { TermsConditionsComponent } from './component/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { HowToApplyComponent } from './component/how-to-apply/how-to-apply.component';
import { FaqComponent } from './component/faq/faq.component';
import { ServicesOfferingComponent } from './component/services-offering/services-offering.component';
import { HowItWorksComponent } from './component/how-it-works/how-it-works.component';
import { UsaSearchCourseComponent } from './component/search-course/usa-search-course/usa-search-course.component';
import { CanadaSearchCourseComponent } from './component/search-course/canada-search-course/canada-search-course.component';
import { NewzealandSearchCourseComponent } from './component/search-course/newzealand-search-course/newzealand-search-course.component';
import { IrelandSearchCourseComponent } from './component/search-course/ireland-search-course/ireland-search-course.component';
import { AustraliaSearchCourseComponent } from './component/search-course/australia-search-course/australia-search-course.component';
import { UkSearchCourseComponent } from './component/search-course/uk-search-course/uk-search-course.component';


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
  },
  {
    path: 'services-offering',
    component: ServicesOfferingComponent
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent
  },
  {
    path: 'usa-search-course',
    component: UsaSearchCourseComponent
  },
  {
    path: 'canada-search-course',
    component: CanadaSearchCourseComponent
  },
  {
    path: 'newzealand-search-course',
    component: NewzealandSearchCourseComponent
  },
  {
    path: 'ireland-search-course',
    component: IrelandSearchCourseComponent
  },
  {
    path: 'australia-search-course',
    component: AustraliaSearchCourseComponent
  },
  {
    path: 'uk-search-course',
    component: UkSearchCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
