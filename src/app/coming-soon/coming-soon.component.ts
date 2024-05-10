import { Component } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css',
})
export class ComingSoonComponent {
  copyrightYear: number;

  constructor() {
    const date = new Date();
    this.copyrightYear = date.getFullYear();
  }
}
