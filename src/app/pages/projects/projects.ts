import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, NgFor],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects = [
    {
      title: 'Bakasyonista',
      description: 'A travel website with online booking and CMS.',
      image: 'assets/project-1.png',
      link: 'https://www.facebook.com/bakasyonista.com.ph',
      techStack: ['Laravel', 'Bootstrap', 'MySQL', 'JQuery']
    },
    {
      title: 'Customizable Menu App',
      description: 'A full-stack web application that lets restaurant owners create, manage, and display a dynamic menu with categories, items, prices, and a configurable default currency.',
      image: 'assets/project-2.png',
      link: 'https://github.com/paolo1231/resto-menu-app',
      techStack: ['Next.js', 'Node.js', 'Express', 'TailwindCSS', 'PostgreSQL']
    },
    {
      title: 'Task Tracker API',
      description: 'A backend REST API for managing tasks with JWT auth.',
      image: 'assets/images/task-api.png',
      link: 'https://github.com/yourname/task-api',
      techStack: ['Node.js', 'Express', 'PostgreSQL', 'JWT']
    }
  ];
}
