import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-angular';
    closeMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.getElementById('navbarNav');

    // Manually collapse the navbar
    if (navbarCollapse?.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  }

    downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf'; // Path to your resume
    link.download = 'Sameer_Resume.pdf'; // Name for the downloaded file
    link.click(); // Programmatically click the link
  }
}
