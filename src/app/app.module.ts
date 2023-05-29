import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layout/preloader/preloader.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ChattingComponent } from './components/common/chatting/chatting.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { PricingPlanComponent } from './components/common/pricing-plan/pricing-plan.component';
import { ClientsComponent } from './components/common/clients/clients.component';
import { FreeTrialComponent } from './components/common/free-trial/free-trial.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TeamComponent } from './components/pages/team/team.component';
import { FeaturesComponent } from './components/pages/features/features/features.component';
import { FeaturesOneComponent } from './components/pages/features/features-one/features-one.component';
import { FeaturesTwoComponent } from './components/pages/features/features-two/features-two.component';
import { AuthComponent } from './components/pages/auth/auth/auth.component';
import { SigninComponent } from './components/pages/auth/signin/signin.component';
import { SignupComponent } from './components/pages/auth/signup/signup.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { BlogComponent } from './components/pages/blog/blog/blog.component';
import { BlogGridComponent } from './components/pages/blog/blog-grid/blog-grid.component';
import { BlogSidebarComponent } from './components/pages/blog/blog-sidebar/blog-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HeaderTwoComponent } from './components/layout/header-two/header-two.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { HomeSevenComponent } from './components/pages/home-seven/home-seven.component';
import { HomeEightComponent } from './components/pages/home-eight/home-eight.component';
import { ServicesOneComponent } from './components/pages/services-one/services-one.component';
import { ServicesTwoComponent } from './components/pages/services-two/services-two.component';
import { ServicesThreeComponent } from './components/pages/services-three/services-three.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { HomeNineComponent } from './components/pages/home-nine/home-nine.component';
import { HomeTenComponent } from './components/pages/home-ten/home-ten.component';
import { HomeElevenComponent } from './components/pages/home-eleven/home-eleven.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChattingComponent,
    PartnerComponent,
    PricingPlanComponent,
    ClientsComponent,
    FreeTrialComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    AboutComponent,
    PricingComponent,
    TeamComponent,
    FeaturesComponent,
    FeaturesOneComponent,
    FeaturesTwoComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    FaqComponent,
    ErrorComponent,
    BlogComponent,
    BlogGridComponent,
    BlogSidebarComponent,
    BlogDetailsComponent,
    ContactComponent,
    HeaderTwoComponent,
    HomeFourComponent,
    HomeFiveComponent,
    HomeSixComponent,
    HomeSevenComponent,
    HomeEightComponent,
    ServicesOneComponent,
    ServicesTwoComponent,
    ServicesThreeComponent,
    ServicesDetailsComponent,
    HomeNineComponent,
    HomeTenComponent,
    HomeElevenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
