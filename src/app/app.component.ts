import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './component/navbar/navbar.component';
import {ThemeToggleSwitchComponent} from './component/theme-toggle-switch/theme-toggle-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ThemeToggleSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-portfolio';


  ngOnInit(): void {

    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme){
      localStorage.setItem('theme', 'light');

    }
  }


}
