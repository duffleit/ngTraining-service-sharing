import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  template: `
    this is a widget
  `,
  styles: [
    `
      :host {
        border: 1px solid black;
      }
    `
  ]
})
export class WidgetComponent {}
