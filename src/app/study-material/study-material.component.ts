import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { StudiesComponent } from './studies/studies.component';
import * as faRegular from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExercisesComponent } from './exercises/exercises.component';

@Component({
  selector: 'app-study-material',
  standalone: true,
  imports: [
    StudiesComponent,
    ExercisesComponent,
    MatTabsModule,
    TranslateModule,
    FontAwesomeModule,
  ],
  templateUrl: './study-material.component.html',
  styleUrl: './study-material.component.scss',
})
export class StudyMaterialComponent {
  faRegular = faRegular;
}
