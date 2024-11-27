import { Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { HeroPageComponent } from './component/hero-page/hero-page.component';
import { FeedbackPageComponent } from './component/feedback-page/feedback-page.component';
import { PaymodePageComponent } from './component/paymode-page/paymode-page.component';
import { TrackingPageComponent } from './component/tracking-page/tracking-page.component';
import { ContactPageComponent } from './component/contact-page/contact-page.component';

export const routes: Routes = [
    {path: '', component:LandingPageComponent},
    {path: 'Welcome' ,component:LandingPageComponent},
    {path: 'home', component:HeroPageComponent},
    {path: 'feedback', component:FeedbackPageComponent},
    {path: 'paymode', component:PaymodePageComponent },
    {path:'tracking', component:TrackingPageComponent},
    {path:'contact', component:ContactPageComponent}
];
