import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
  imports: [CommonModule]
})
export class Experience {
  companies = [
    {
      name: 'Accenture, Inc.',
      role: 'Senior Java Developer',
      duration: '2015 - 2023',
      description: `<ul>
            <li>Engineered scalable microservices using Java and Spring Boot, enhancing system performance and contributing to a $2m increase in client revenue.</li>
            <li>Implemented secure coding standards and optimized SQL queries, improving data transaction efficiency and system reliability.</li>
            <li>Collaborated with global teams to automate CI/CD pipelines, reducing deployment times by 30% and ensuring consistent code integration.</li>
            <li>Led backend development for logistics platforms, resulting in a 25% increase in operational efficiency and annual savings of $1m.</li>
        </ul>`
    },
    {
      name: 'Freelance',
      role: 'Fullstack Developer',
      duration: '2014 - Present',
      description: `<ul>
            <li>Developed and deployed responsive websites and CMS platforms for local businesses, enhancing their digital presence.</li>
            <li>Built full-stack web applications using PHP (Laravel), JavaScript, and MySQL, tailored to specific client requirements.</li>
            <li>Integrated backend logic with front-end UX to improve client operations and user engagement.</li>
        </ul>`
    },
    {
      name: 'Maryland Distributors, Inc.',
      role: 'Programmer',
      duration: '2014 - 2015',
      description: `<ul>
            <li>Developed an RFID-based attendance system, increasing accuracy in employee time tracking.</li>
            <li>Created B2B tools using VB.NET and PHP, reducing manual processing times by 40%.</li>
            <li>Maintained Android applications for data collection, ensuring uninterrupted warehouse performance.</li>
        </ul>`
    }
  ];

  selectedCompany = this.companies[0]; // ✅ default selected
  selectCompany(company: any) {
    this.selectedCompany = company;
  }
}
