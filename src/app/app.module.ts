import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { TermsConditionsComponent } from './component/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { FaqComponent } from './component/faq/faq.component';
import { HowToApplyComponent } from './component/how-to-apply/how-to-apply.component';
import { ServicesOfferingComponent } from './component/services-offering/services-offering.component';
import { HowItWorksComponent } from './component/how-it-works/how-it-works.component';
import { UsaSearchCourseComponent } from './component/search-course/usa-search-course/usa-search-course.component';
import { CanadaSearchCourseComponent } from './component/search-course/canada-search-course/canada-search-course.component';
import { NewzealandSearchCourseComponent } from './component/search-course/newzealand-search-course/newzealand-search-course.component';
import { IrelandSearchCourseComponent } from './component/search-course/ireland-search-course/ireland-search-course.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutUsComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    FaqComponent,
    HowToApplyComponent,
    ServicesOfferingComponent,
    HowItWorksComponent,
    UsaSearchCourseComponent,
    CanadaSearchCourseComponent,
    NewzealandSearchCourseComponent,
    IrelandSearchCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
