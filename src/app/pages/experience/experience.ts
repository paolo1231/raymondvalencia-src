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
      name: 'Integrated Solutions',
      role: 'Communications Technician',
      duration: 'March 2024 - Present',
      description: `<ul>
        <li>Providing full-service sales and installation of cable, internet, and satellite TV for residential and commercial clients.</li>
      </ul>`
    },
    {
      name: 'Career Break',
      role: 'Relocation and Personal Development',
      duration: 'March 2023 - February 2024',
      description: `<ul>
        <li>Relocated to British Columbia and pursued personal growth opportunities.</li>
      </ul>`
    },
    {
      name: 'Accenture, Inc.',
      role: 'Application Development Associate Manager (Senior Java Developer)',
      duration: 'June 2022 – March 2023',
      description: `<ul>
        <li>Took initiative to document technical processes and mentor over 5 team members as a Java Subject Matter Expert, accelerating onboarding and improving team efficiency.</li>
        <li>Built the OneCart system using Java, Hibernate, and Spring MVC for the Canadian division of a major South Korean electronics brand, combining multiple product lines into a single checkout flow and improving checkout speed by 50%.</li>
        <li>Led the migration of two subsidiaries of a major South Korean electronics company from a reseller model to a direct-sales platform using Java and SAP Commerce Cloud, resulting in a 10% increase in sales and improved inventory management.</li>
      </ul>`
    },
    {
      name: 'Accenture, Inc.',
      role: 'Application Development Team Lead (Specialist)',
      duration: 'February 2021 - June 2022',
      description: `<ul>
        <li>Developed and launched key e-commerce features for a leading South Korean electronics brand, including Trade-In, Insurance, and CMS-friendly templates using SAP Commerce Cloud and Spring, improving content manageability and marketing speed by 5%.</li>
        <li>Mentored 2 junior developers and coordinated with UI/UX teams, enabling faster onboarding and stronger team alignment.</li>
        <li>Identified inefficiencies in manual report distribution for a global client and enhanced the system by implementing automated report generation with email and SFTP delivery, reducing manual workload by 40% and improving reporting turnaround time.</li>
        <li>Pursued professional growth by earning the SAP Commerce Cloud 1905 Developer Certification, demonstrating technical proficiency and contributing to improved solution design and code quality across multiple projects.</li>
      </ul>`
    },
    {
      name: 'Accenture, Inc.',
      role: 'Application Development Senior Analyst',
      duration: 'December 2018 - February 2021',
      description: `<ul>
        <li>Faced with limited reporting capabilities in a major US youth organization’s ordering platform, added Cron-triggered sales report generation features, increasing data visibility and improving order tracking accuracy by 60%.</li>
        <li>Completed SAP Commerce Cloud 6.7 Developer Certification to strengthen platform expertise and support development of more efficient, maintainable features.</li>
      </ul>`
    },
    {
      name: 'Accenture, Inc.',
      role: 'Application Development Analyst',
      duration: 'December 2016 - December 2018',
      description: `<ul>
        <li>Faced slow catalog updates for a Japanese manufacturing client managing over 10,000 SKUs; rewrote SQL queries and sync rules using Groovy, cutting sync time by 40% and reducing data errors by 25%.</li>
      </ul>`
    },
    {
      name: 'Accenture, Inc.',
      role: 'Associate Software Engineer',
      duration: 'January 2015 - December 2016',
      description: `<ul>
        <li>Helped redesign and maintain the billing portal of a major U.S. pizza chain using SAP Commerce Cloud, resolving key billing issues and improving payment accuracy.</li>
        <li>Traveled to Hyderabad, India for a 1-month training session to support ongoing maintenance and ensure smooth knowledge transfer across teams.</li>
      </ul>`
    },
    {
      name: 'Maryland Distributors, Inc.',
      role: 'Full Stack Developer',
      duration: 'June 2014 – January 2015',
      description: `<ul>
        <li>Reduced manual errors by 30% and improved warehouse efficiency by designing and implementing automated logistics and inventory systems using PHP, VB.NET, and MySQL for data management and real-time tracking.</li>
        <li>Accelerated departmental decision-making by 25% by developing custom tracking and reporting tools integrated with MySQL databases, enabling rapid data access and visualization.</li>
      </ul>`
    }
  ];

  selectedCompany = this.companies[0]; // ✅ default selected
  selectCompany(company: any) {
    this.selectedCompany = company;
  }
}
