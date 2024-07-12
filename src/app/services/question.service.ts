import { Injectable, signal } from '@angular/core';
import { Question, QuestionChoices } from '../../domain/model/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  questionList = signal<Question[]>([]);

  constructor() {}

  addQuestion(question: Question) {
    this.questionList.update((v) => [...v, question]);
  }

  updateQuestionByIndex(question: Question, index: number) {
    let data = this.questionList();
    data[index] = question;
    this.questionList.set(data);
  }

  removeQuestionByIndex(index: number) {
    let data = this.questionList().filter((v, i) => i != index);
    this.questionList.set(data);
  }

  addChoice(index: number) {
    let data = this.questionList();
    data[index].choices = [
      ...data[index].choices,
      new QuestionChoices('', false),
    ];
    this.questionList.set(data);
  }

  udpateChoice(choice: QuestionChoices, choiceIndex: number, index: number) {
    let data = this.questionList();
    data[index].choices[choiceIndex] = choice;
    this.questionList.set(data);
  }

  removeChoice(choiceIndex: number, index: number) {
    let data = this.questionList();
    data[index].choices = data[index].choices.filter(
      (v, i) => i != choiceIndex
    );
    this.questionList.set(data);
  }
}
