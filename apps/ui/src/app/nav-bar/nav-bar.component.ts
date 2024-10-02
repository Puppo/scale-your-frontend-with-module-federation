import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'ng-store-nav-bar',
  standalone: true,
  imports: [CommonModule],
  template: `<nav class="container">
      @for (item of items(); track item.link) {
        <a to={link}>
					{{item.label}}
        </a>
      }
		</nav>
  `,
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  items = input<Array<{
		label: string;
		link: string;
	}>>();
}
