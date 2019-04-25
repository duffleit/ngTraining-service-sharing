import { Component } from '@angular/core';
import { AuthService } from '../_shared/auth-service.service';

@Component({
  selector: 'app-dashboard',
  template: `
    dashboard {{ authService.info }}
  `
})
export class DashboardComponent {
  constructor(public authService: AuthService) {}
}
