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
      description: 'A responsive web application for managing notes, built with the MEAN stack (MongoDB, Express.js, Angular, Node.js), featuring CRUD operations, timestamps, and an intuitive user interface.',
      link: 'https://notes-app-tau-five-81.vercel.app/'
    },
    {
      title: 'BlogKaro.com',
      description: 'The Blog Application is a full-stack web platform built with EJS for the frontend and Node.js, Express, and MongoDB for the backend, enabling users to create and comment on blog posts with secure authentication.',
      link: 'https://blog-app-production-55f0.up.railway.app/'
    }
  ];

  constructor() { }

}
