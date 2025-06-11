import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Experience } from './pages/experience/experience';

export const routes: Routes = [
  { path: '', component: Home, data: { animation: 'HomePage' } },
  { path: 'projects', component: Projects, data: {animation: 'ProjectsPage'} },
  { path: 'experience', component: Experience, data: {animation: 'ExperiencePage'} },
];