export class Question {
  questionText: string;
  difficult: QuestionDifficult;
  type: QuestionType;
  choices: QuestionChoices[];
  constructor(
    questionText: string,
    difficult: QuestionDifficult,
    type: QuestionType,
    choices: QuestionChoices[] = []
  ) {
    this.questionText = questionText;
    this.difficult = difficult;
    this.type = type;
    this.choices = choices;
  }
}

export class QuestionChoices {
  title: string;
  isCorrect: boolean;

  constructor(title: string, isCorrect: boolean = false) {
    this.title = title;
    this.isCorrect = isCorrect;
  }
}

export enum QuestionDifficult {
  easy,
  normal,
  hard,
}

export enum QuestionType {
  multiSelecet,
  singleSelecet,
  text,
}
