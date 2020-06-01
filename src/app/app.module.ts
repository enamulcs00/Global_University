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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutUsComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    FaqComponent,
    HowToApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
