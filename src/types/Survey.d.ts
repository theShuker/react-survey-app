export interface ISurvey {
  id: string;
  title: string;
  description: string;
  questions: IQuestion[];
};

export interface IQuestion {
  id: string;
  title: string;
  description: string;
  inputType: 'text';
};

export interface ISubmission {
  id: string
  surveyId: string
  answers: {[key: string]: string}
}