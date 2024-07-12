import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StudyMaterialsService } from '../../services/study-materials.service';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as faSolid from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    MatGridListModule,
    FontAwesomeModule,
  ],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss',
})
export class StudiesComponent implements OnInit, OnDestroy {
  _subscribe$ = new Subject();

  faSolid = faSolid;

  studies = this.studyMaterialsService.studyMaterials;
  constructor(private studyMaterialsService: StudyMaterialsService) {}

  ngOnInit(): void {
    this.studyMaterialsService
      .getStudyMaterialsList()
      .pipe(takeUntil(this._subscribe$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this._subscribe$.next(true);
    this._subscribe$.complete();
  }
}
