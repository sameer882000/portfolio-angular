import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf'; // Path to your resume
    link.download = 'Sameer_Resume.pdf'; // Name for the downloaded file
    link.click(); // Programmatically click the link
  }
}
