import { Component } from '@angular/core';
import { StartComponent } from './start/start.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WorkSectionComponent } from './work-experience/work-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StartComponent, CarouselComponent, WorkSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
