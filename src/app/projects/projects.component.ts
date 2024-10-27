import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('0.5s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ProjectsComponent {
  isDarkMode: boolean = true;
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Subscribe to the theme changes
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark; // Update the isDarkMode property
    });

    // Initialize the isDarkMode property
    this.isDarkMode = this.themeService.isDarkModeSubject.value;
  }

  projects = [
    // {
    //   title: 'Smart-Expense-Tracker',
    //   description:
    //     'The Smart Expense Tracker is a dynamic web application that helps users manage their personal finances by efficiently tracking expenses. Built using Angular, it features a responsive design with Angular Material for a modern interface, allowing users to add, view, and delete expenses seamlessly. The application utilizes Firebase Authentication for secure user login and signup, while Cloud Firestore serves as the real-time database to store and sync expense data.',
    //   link: 'https://smart-expense-tracker-50d00.web.app/',
    //   source: 'https://github.com/sameer882000/smart-expense-tracker',
    //   tools: [
    //     { name: 'Angular' },
    //     { name: 'Angular Material' },
    //     { name: 'Firebase' },
    //     { name: 'Cloud Firestore' },
    //   ],
    // },
    {
      title: 'Notes App',
      description:
        'A responsive web application for managing notes, built with the MEAN stack (MongoDB, Express.js, Angular, Node.js), featuring CRUD operations, timestamps, and an intuitive user interface with secure authentication.',
      link: 'https://notes-app-tau-five-81.vercel.app/',
      source: 'https://github.com/sameer882000/notes-app-frontend',
      tools: [
        { name: 'Angular' },
        { name: 'Bootstrap' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'MongoDB' },
      ],
    },
    {
      title: 'Blog App',
      description:
        'The Blog Application is a full-stack web platform built with EJS for the frontend and Node.js, Express, and MongoDB for the backend, enabling users to create and comment on blog posts with secure authentication.',
      link: 'https://blog-app-production-55f0.up.railway.app/',
      source: 'https://github.com/sameer882000/blog-app',
      tools: [
        { name: 'EJS' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'MongoDB' },
      ],
    },
    {
      title: 'Weather App',
      description:
        'A user-friendly weather application built with Angular and TypeScript that provides real-time weather updates by fetching data from the OpenWeatherMap API. Users can easily check current weather conditions and view a detailed hourly forecast for any city across the globe.',
      link: 'https://weather-app-cyan-mu-31.vercel.app/',
      source: 'https://github.com/sameer882000/weather-app',
      tools: [
        { name: 'Angular' },
        { name: 'Bootstrap' },
        { name: 'OpenWeatherMap API' },
      ],
    },
  ];
}
