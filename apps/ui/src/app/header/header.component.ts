import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ng-store-header',
  standalone: true,
  imports: [CommonModule],
  template: `<div>header</div>`,
})
export class HeaderComponent {}
