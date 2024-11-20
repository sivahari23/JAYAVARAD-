import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroPageComponent } from "../hero-page/hero-page.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HeroPageComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
