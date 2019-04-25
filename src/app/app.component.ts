import { Component } from '@angular/core';
import { AuthService } from './_shared/auth-service.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{ title }}
    </h1>

    <div>
      <button routerLink="/dashboard">Dashboard</button>
      <button routerLink="/checkout">Checkout</button>
      <button routerLink="/search">Search</button>
    </div>

    <div class="content"><router-outlet></router-outlet></div>

    <hr />

    <div>root: {{ authService.info }}</div>
  `
})
export class AppComponent {
  title = 'ngTraining-preloading';

  constructor(public authService: AuthService) {}
}
