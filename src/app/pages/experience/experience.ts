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
      role: 'Application Development Associate Manager (Senior Java Developer)',
      duration: '2015 - 2023',
      description: `<ul>
            <li>Led the end-to-end design and implementation of the “One Cart” initiative using Java, Hibernate, and Spring MVC for the Canadian arm of a major South Korean electronics brand, unifying multiple product streams into a single checkout experience to streamline online purchasing.</li>
            <li>Developed and launched key e-commerce features for a leading South Korean electronics brand, including Trade-In, Insurance, and CMS-friendly templates using SAP Commerce Cloud and Spring, improving content manageability and marketing speed.</li>
            <li>Created dynamic CMS-driven email templates and web components using JSP and Java, improving marketing flexibility.</li>
            <li>Optimized data synchronization for a Japanese manufacturing client by redesigning SQL queries and sync rules using Groovy, enabling efficient catalog management of thousands of SKUs.</li>
            <li>Maintained and extended the online ordering system of a major US youth organization, creating sales report generation features triggered via Cron Jobs, improving data visibility and order tracking.</li>
            <li>Collaborated cross-functionally with a top US pizza chain to build and enhance their SAP Commerce Cloud-based billing portal, improving payment reliability and user experience.</li>
            <li>Mentored junior developers and coordinated with UI/UX teams, enabling faster onboarding and stronger team alignment.</li>
        </ul>`
    },
    {
      name: 'Maryland Distributors, Inc.',
      role: 'Fullstack Developer',
      duration: '2014 - 2015',
      description: `<ul>
            <li>Reduced manual errors by 30% and improved warehouse efficiency by designing and implementing automated logistics and inventory systems using PHP, VB.NET, and MySQL for data management and real-time tracking.</li>
            <li>Accelerated departmental decision-making by 25% by developing custom tracking and reporting tools integrated with MySQL databases, enabling rapid data access and visualization.</li>
            <li>Enhanced system reliability and maintainability by applying best practices in code documentation, modular design, and version control using Git for warehouse management applications.</li>
            <li>Supported cross-functional collaboration and requirement gathering by working with operations and IT teams to deliver scalable logistics software solutions aligned with business needs.</li>
        </ul>`
    }
  ];

  selectedCompany = this.companies[0]; // ✅ default selected
  selectCompany(company: any) {
    this.selectedCompany = company;
  }
}
