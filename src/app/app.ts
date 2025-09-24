import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './route-animations';
import { ThreeBackgroundComponent } from './components/three-background/three-background.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ThreeBackgroundComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [slideInAnimation]
})
export class App {
  protected title = 'portfolio-site';
  currentYear = new Date().getFullYear();

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
