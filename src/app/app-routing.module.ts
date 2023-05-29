import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TeamComponent } from './components/pages/team/team.component';
import { FeaturesComponent } from './components/pages/features/features/features.component';
import { FeaturesOneComponent } from './components/pages/features/features-one/features-one.component';
import { FeaturesTwoComponent } from './components/pages/features/features-two/features-two.component';
import { AuthComponent } from './components/pages/auth/auth/auth.component';
import { SignupComponent } from './components/pages/auth/signup/signup.component';
import { SigninComponent } from './components/pages/auth/signin/signin.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { BlogComponent } from './components/pages/blog/blog/blog.component';
import { BlogGridComponent } from './components/pages/blog/blog-grid/blog-grid.component';
import { BlogSidebarComponent } from './components/pages/blog/blog-sidebar/blog-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { HomeSevenComponent } from './components/pages/home-seven/home-seven.component';
import { HomeEightComponent } from './components/pages/home-eight/home-eight.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ServicesOneComponent } from './components/pages/services-one/services-one.component';
import { ServicesTwoComponent } from './components/pages/services-two/services-two.component';
import { ServicesThreeComponent } from './components/pages/services-three/services-three.component';
import { HomeNineComponent } from './components/pages/home-nine/home-nine.component';
import { HomeTenComponent } from './components/pages/home-ten/home-ten.component';
import { HomeElevenComponent } from './components/pages/home-eleven/home-eleven.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home-two', component: HomeTwoComponent },
    { path: 'home-three', component: HomeThreeComponent },
    { path: 'home-four', component: HomeFourComponent },
    { path: 'home-five', component: HomeFiveComponent },
    { path: 'home-six', component: HomeSixComponent },
    { path: 'home-seven', component: HomeSevenComponent },
    { path: 'home-eight', component: HomeEightComponent },
    { path: 'home-nine', component: HomeNineComponent },
    { path: 'home-ten', component: HomeTenComponent },
    { path: 'home-eleven', component: HomeElevenComponent },
    { path: 'about', component: AboutComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'team', component: TeamComponent },
    { path: 'services-1', component: ServicesOneComponent },
    { path: 'services-2', component: ServicesTwoComponent },
    { path: 'services-3', component: ServicesThreeComponent },
    { path: 'single-services', component: ServicesDetailsComponent },
    {
        path: 'features', component: FeaturesComponent,
        children: [
            {
                path: 'features-1',
                component: FeaturesOneComponent
            },
            {
                path: 'features-2',
                component: FeaturesTwoComponent
            }
        ]
    },
    {
        path: 'auth', component: AuthComponent,
        children: [
            {
                path: 'signup',
                component: SignupComponent
            },
            {
                path: 'signin',
                component: SigninComponent
            }
        ]
    },
    {
        path: 'blog', component: BlogComponent,
        children: [
            {
                path: 'blog-grid',
                component: BlogGridComponent
            },
            {
                path: 'blog-with-right-sidebar',
                component: BlogSidebarComponent
            },
            {
                path: 'blog-details',
                component: BlogDetailsComponent
            }
        ]
    },
    { path: 'faq', component: FaqComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
