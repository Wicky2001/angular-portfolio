import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  hackVentureImageUrl: string = 'carousel/hackventure.jpeg';
  intelliHackImageUrl: string = 'carousel/intellihack.jpeg';
  techxImageUrl: string = 'carousel/techx.jpeg';
}
