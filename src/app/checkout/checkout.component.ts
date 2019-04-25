import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_shared/auth-service.service';

@Component({
  selector: 'app-checkout',
  template: `
    chechkout {{ authService.info }}

    <app-widget></app-widget>
  `
})
export class CheckoutComponent {
  constructor(public authService: AuthService) {}
}
