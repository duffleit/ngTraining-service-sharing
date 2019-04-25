import { Component } from '@angular/core';
import { AuthService } from '../_shared/auth-service.service';

@Component({
  selector: 'app-search',
  template: `
    search {{ authService.info }}

    <app-widget></app-widget>
  `
})
export class SearchComponent {
  constructor(public authService: AuthService) {}
}
