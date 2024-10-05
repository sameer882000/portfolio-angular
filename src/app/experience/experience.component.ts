import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf'; // Path to your resume
    link.download = 'Sameer_Resume.pdf'; // Name for the downloaded file
    link.click(); // Programmatically click the link
  }
}
