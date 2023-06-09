import { IQuestion } from '../../../types/Survey';
import QuestionContainer from '../QuestionContainer';
import QuestionInput from './QuestionInput';

const Question = ({ question: q, register }: { question: IQuestion, register: any }) => {
  return (
    <QuestionContainer>
      <h2 className='font-semibold text-xl'>{q.title}</h2>
      {q.description && <p>{q.description}</p>}

      <QuestionInput type={q.inputType} answerOptions={q.answerOptions} register={register} />
    </QuestionContainer>
  );
};
export default Question;
