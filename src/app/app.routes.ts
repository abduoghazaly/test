import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudyMaterialComponent } from './study-material/study-material.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'studyMaterials', component: StudyMaterialComponent },

  { path: '**', redirectTo: '/home' },
];
