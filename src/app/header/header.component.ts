import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public themeService: ThemeService) { }
  
  ngOnInit() {
    this.themeService.applyTheme(); // Apply saved theme on load
  }
downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf'; // Path to your resume
    link.download = 'Sameer_Resume.pdf'; // Name for the downloaded file
    link.click(); // Programmatically click the link
  }
}
