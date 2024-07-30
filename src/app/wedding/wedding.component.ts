import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-wedding',
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: './wedding.component.html',
	styleUrl: './wedding.component.scss',
})
export class WeddingComponent {
	// <img ngSrc="assets/product-image.jpg" width="400" height="300" alt="Product" priority="high" fill="true" />
}
