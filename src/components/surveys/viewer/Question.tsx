import { IQuestion } from '../../../types/Survey';
import QuestionContainer from '../QuestionContainer';
import QuestionInput from './QuestionInput';

const Question = ({ question: q }: { question: IQuestion }) => {
  return (
    <QuestionContainer>
      <h2 className='font-semibold text-xl'>{q.title}</h2>
      {q.description && <p>{q.description}</p>}

      <QuestionInput type={q.inputType} answerOptions={q.answerOptions} />
    </QuestionContainer>
  );
};
export default Question;
