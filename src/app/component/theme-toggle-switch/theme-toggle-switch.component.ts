import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-theme-toggle-switch',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './theme-toggle-switch.component.html',
  styleUrl: './theme-toggle-switch.component.scss',
})
export class ThemeToggleSwitchComponent implements OnInit {
  theme: string = 'light';
  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.theme = savedTheme;
      document.documentElement.setAttribute('data-bs-theme', this.theme);
    }
  }

  onSwitchChanged() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', this.theme);
    localStorage.setItem('theme', this.theme);
  }
}
