import { useParams } from 'react-router-dom';
import Button from '../../components/common/Button';
import Loading from '../../components/common/Loading';
import Question from '../../components/surveys/viewer/Question';
import { useSurvey } from '../../hooks/useSurvey';
import { useForm } from 'react-hook-form';
import { createSubmission } from '../../services/SubmissionService';
import { ISubmission } from '../../types/Survey';

const SurveysPage = () => {
  let { surveyId } = useParams<'surveyId'>();
  const { survey, error, isLoading } = useSurvey(surveyId as string);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(
    (data: { [key: string]: string }) => {
      if (!surveyId) return;
      console.log('survey data:', data);

      createSubmission({ surveyId, answers: data }).then(() => {
        alert('submission created');
        
      }).catch(e => {
        alert(JSON.stringify(e))
      });
    },
    (errors) => alert('There are errors in survey fields')
  );

  if (isLoading) return <Loading />;

  return (
    <main className="p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">{survey?.title}</h1>
        <p>{survey?.description}</p>
        <small>Consists of {survey?.questions.length} questions</small>
      </div>
      <ul className="flex flex-col gap-2 mt-6">
        {survey?.questions.map((q, idx) => (
          <li key={q.id}>
            <Question question={q} register={register(q.id)} />
          </li>
        ))}
      </ul>

      <div className="mt-2">
        <Button color="success" size="large" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </main>
  );
};
export default SurveysPage;
