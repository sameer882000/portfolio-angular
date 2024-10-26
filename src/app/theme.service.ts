import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = true; // Default theme

  constructor() {
    this.loadTheme(); // Load theme from localStorage on init
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.saveTheme();
    this.applyTheme();
  }

  public saveTheme() {
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  public loadTheme() {
    const theme = localStorage.getItem('theme');
    this.isDarkMode = theme === 'dark';
    this.applyTheme();
  }

  public applyTheme() {
    const themeClass = this.isDarkMode ? 'dark-mode' : 'light-mode';
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(themeClass);
  }
}
