import { Component } from '@angular/core';
import { StartComponent } from './start/start.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
