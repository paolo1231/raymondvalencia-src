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
      "title": "API Documentation Generator",
      "description": "A full-stack web application that generates clean, interactive API documentation from Java code comments (Javadoc) or OpenAPI/Swagger files with search functionality and responsive design.",
      "image": "assets/project-6.png",
      "link": "https://github.com/paolo1231/APIGen",
      "techStack": ["React", "Spring Boot", "TailwindCSS", "Java", "Maven"]
    },
    {
      title: 'Customizable Menu App',
      description: 'A full-stack web application that lets restaurant owners create, manage, and display a dynamic menu with categories, items, prices, and a configurable default currency.',
      image: 'assets/project-2.png',
      link: 'https://github.com/paolo1231/resto-menu-app',
      techStack: ['Next.js', 'Node.js', 'Express', 'TailwindCSS', 'PostgreSQL']
    },
    {
      title: 'paolo1231.github.io',
      description: 'This is my personal developer portfolio built using Angular 20, showcasing my background as a full stack developer with a focus on backend development. The website features animated transitions, a custom circuit board background, and responsive design consistent with a tech-inspired theme.',
      image: 'assets/project-3.png',
      link: 'https://github.com/paolo1231/raymondvalencia-src',
      techStack: ['Angular', 'Bootstrap', 'SCSS']
    },
    {
      title: 'Bakasyonista',
      description: 'A travel website with online booking and CMS.',
      image: 'assets/project-1.png',
      link: 'https://www.facebook.com/bakasyonista.com.ph',
      techStack: ['Laravel', 'Bootstrap', 'MySQL', 'JQuery']
    },
    {
      title: 'Orion Chinese Restaurant',
      description: 'A local Chinese restaurant in Dawson Creek, BC',
      image: 'assets/project-4.png',
      link: 'https://orionrestaurant.ca/',
      techStack: ['Squarespace']
    },
    {
      title: 'Sam\'s Friends Restaurant',
      description: 'A local all-day breakfast restaurant in Dawson Creek, BC',
      image: 'assets/project-5.png',
      link: 'https://www.samsfriendsrestaurant.com/',
      techStack: ['Squarespace']
    },
    {
      title: 'Chef Trio\'s Kitchen',
      description: 'A local all-day breakfast restaurant in Dawson Creek, BC',
      image: 'assets/project-chef-trio.png',
      link: 'https://www.cheftriokitchen.ca/',
      techStack: ['Squarespace']
    }
  ];
}
