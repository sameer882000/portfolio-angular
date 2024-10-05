import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Task Manager App',
      description: 'A task management tool built with Angular and Firebase.',
      link: 'https://your-link-to-task-manager.com'
    },
    {
      title: 'E-commerce Website',
      description: 'An online store with shopping cart and payment gateway integration.',
      link: 'https://your-link-to-ecommerce.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
