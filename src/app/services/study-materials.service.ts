import { Injectable, signal } from '@angular/core';
import * as mock from '../../assets/mock-data/subject.json';
import { StudyMaterials } from '../../domain/model/study-materials';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudyMaterialsService {
  studyMaterials = signal<StudyMaterials[]>([]);

  constructor(private http: HttpClient) {}

  getStudyMaterialsList(): Observable<Object> {
    return this.http
      .get('./assets/mock-data/subject.json')
      .pipe(tap((value) => this.studyMaterials.set(value as StudyMaterials[])));
  }
}
