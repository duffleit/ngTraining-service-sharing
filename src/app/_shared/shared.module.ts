import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';
import { AuthService } from './auth-service.service';

@NgModule({
  declarations: [WidgetComponent],
  exports: [WidgetComponent],
  providers: [AuthService],
  imports: [CommonModule]
})
export class SharedModule {}
