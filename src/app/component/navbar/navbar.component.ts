import { Component } from '@angular/core';
import { ThemeToggleSwitchComponent } from '../theme-toggle-switch/theme-toggle-switch.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeToggleSwitchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
