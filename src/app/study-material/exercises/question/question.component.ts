import { Component, Input, input, OnInit } from '@angular/core';
import {
  Question,
  QuestionChoices,
  QuestionDifficult,
  QuestionType,
} from '../../../../domain/model/question';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as faSolid from '@fortawesome/free-solid-svg-icons';
import { QuestionService } from '../../../services/question.service';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatRadioModule,
    MatCheckboxModule,
    CommonModule,
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent implements OnInit {
  @Input('question') question!: Question;
  @Input('index') index!: number;

  questionType = QuestionType;
  questionDifficult = QuestionDifficult;
  questionForm!: FormGroup;
  faSolid = faSolid;
  radioValue = 0;

  timer: any;

  constructor(
    private _fb: FormBuilder,
    public questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.questionForm = this._fb.group({
      questionText: [this.question.questionText, Validators.required],
      difficult: [this.question.difficult],
      type: [this.question.type],
      choices: this._fb.array([]),
    });

    this.question.choices.forEach((v, i) => this.addChoice(v));
  }

  get choices() {
    return this.questionForm.get('choices') as FormArray;
  }

  addChoice(choice: QuestionChoices = new QuestionChoices('', true)) {
    this.choices.push(
      this._fb.group({
        title: [choice.title, Validators.required],
        isCorrect: [choice.isCorrect],
      })
    );
  }

  removeChoice(index: number) {
    this.choices.removeAt(index);
  }

  onRadioChange(event: MatRadioChange) {
    this.choices.controls.forEach((v, i) => {
      v.patchValue({ isCorrect: i == event.value });
    });
  }

  onFormChange() {
    if (this.timer != null) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(
      () =>
        this.questionService.updateQuestionByIndex(
          this.questionForm.value,
          this.index
        ),
      1000
    );
  }
}
