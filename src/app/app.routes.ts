import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Experience } from './pages/experience/experience';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Raymond Valencia | Full Stack Developer',
        data: { animation: 'HomePage' }
    },
    {
        path: 'projects',
        component: Projects,
        title: 'RV | My Projects',
        data: { animation: 'ProjectsPage' }
    },
    {
        path: 'experience',
        component: Experience,
        title: 'RV | Work Experience',
        data: { animation: 'ExperiencePage' }
    }
];