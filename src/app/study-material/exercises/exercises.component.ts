import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { QuestionComponent } from './question/question.component';
import {
  Question,
  QuestionDifficult,
  QuestionType,
} from '../../../domain/model/question';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [QuestionComponent, TranslateModule, CdkDropList, CdkDrag],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss',
})
export class ExercisesComponent {
  questionType = QuestionType;
  questionList = this.questionService.questionList;

  constructor(private questionService: QuestionService) {}

  onDrop(event: CdkDragDrop<QuestionType>) {
    if (event.previousContainer === event.container) {
      console.log('nothing to do!!!');
    } else {
      this.questionService.addQuestion(
        new Question('', QuestionDifficult.easy, event.item.data, [])
      );
    }
  }
}
