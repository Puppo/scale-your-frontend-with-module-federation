import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'ng-store-users-entry',
  template: `<ng-store-nx-welcome></ng-store-nx-welcome>`,
})
export class RemoteEntryComponent {}
