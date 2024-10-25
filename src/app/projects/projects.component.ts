import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
    animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ProjectsComponent  {
  projects = [
    {
      title: 'Notes App',
      description: 'A responsive web application for managing notes, built with the MEAN stack (MongoDB, Express.js, Angular, Node.js), featuring CRUD operations, timestamps, and an intuitive user interface with secure authentication.',
      link: 'https://notes-app-tau-five-81.vercel.app/',
      source: 'https://github.com/sameer882000/notes-app-frontend', 
        tools: [
      { name: 'Angular', icon: 'fab fa-angular' },
      { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express.js', icon: 'fas fa-server' },
      { name: 'MongoDB', icon: 'fas fa-database' }
    ]
    },
    {
      title: 'Blog App',
      description: 'The Blog Application is a full-stack web platform built with EJS for the frontend and Node.js, Express, and MongoDB for the backend, enabling users to create and comment on blog posts with secure authentication.',
      link: 'https://blog-app-production-55f0.up.railway.app/',
      source: 'https://github.com/sameer882000/blog-app',
        tools: [
      { name: 'Angular', icon: 'fab fa-angular' },
      { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express.js', icon: 'fas fa-server' },
      { name: 'MongoDB', icon: 'fas fa-database' }
    ]
    },
          {
      title: 'Weather App',
     description: 'A user-friendly weather application built with Angular and TypeScript that provides real-time weather updates by fetching data from the OpenWeatherMap API. Users can easily check current weather conditions and view a detailed hourly forecast for any city across the globe.',
      link: 'https://weather-app-cyan-mu-31.vercel.app/',
      source: 'https://github.com/sameer882000/weather-app',
        tools: [
      { name: 'Angular', icon: 'fab fa-angular' },
      { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
      { name: 'OpenWeatherMap API', icon: 'fa-solid fa-cloud' },
    ]
    },

  ];

  constructor() { }

}
