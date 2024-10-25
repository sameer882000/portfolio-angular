import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  isDarkMode = false;
  title = 'portfolio-angular';

    ngOnInit() {
    const savedMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
    this.isDarkMode = savedMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }

    closeMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.getElementById('navbarNav');

    // Manually collapse the navbar
    if (navbarCollapse?.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  }

    

    toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
