import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = true; // Default theme
  public isDarkModeSubject = new BehaviorSubject<boolean>(true); // Default theme
  isDarkMode$ = this.isDarkModeSubject.asObservable();
  constructor() {
    this.loadTheme(); // Load theme from localStorage on init
  }

  toggleTheme() {
    this.isDarkModeSubject.next(!this.isDarkModeSubject.value);
    this.isDarkMode = !this.isDarkMode;
    this.saveTheme();
    this.applyTheme();
  }

  public saveTheme() {
    const theme = this.isDarkModeSubject.value ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
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