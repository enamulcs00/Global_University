import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { Section1Component } from './component/application-form/section1/section1.component';
import { Section2Component } from './component/application-form/section2/section2.component';
import { Section3Component } from './component/application-form/section3/section3.component';
import { Section4Component } from './component/application-form/section4/section4.component';
import { Section5Component } from './component/application-form/section5/section5.component';
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
import { MoreInformationShareComponent } from './component/application-form/more-information-share/more-information-share.component';
import { ViewFormComponent } from './component/application-form/view-form/view-form.component';
import { DraftFormComponent } from './component/dashboard/draft-form/draft-form.component';
import { ApplicationProgressComponent } from './component/dashboard/application-progress/application-progress.component';
import { ViewProgressComponent } from './component/dashboard/view-progress/view-progress.component';
import { ReportComponent } from './component/dashboard/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
   
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component,
    Section9Component,
    Section10Component,
    Section11Component,
    Section12Component,
    Section13Component,
    Section14Component,
    Section15Component,
    ApplicationFormPreviewComponent,
    MatchingUniversitiesComponent,
    MoreInformationShareComponent,
    ViewFormComponent,
    DraftFormComponent,
    ApplicationProgressComponent,
    ViewProgressComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
