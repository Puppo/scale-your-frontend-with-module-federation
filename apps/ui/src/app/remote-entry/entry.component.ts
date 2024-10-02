import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ng-store-ui-entry',
  template: `<div className="content">
  <h1>Ui</h1>
  <p>This is the Ui federation App</p>
</div>`,
})
export class RemoteEntryComponent {}
