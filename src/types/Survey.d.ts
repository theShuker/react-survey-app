import { QuestionInputType } from "../components/surveys/viewer/QuestionInput";

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
  inputType: QuestionInputType;
  answerOptions: string[] | undefined
};

export interface ISubmission {
  id: string
  surveyId: string
  answers: {[key: string]: string}
}