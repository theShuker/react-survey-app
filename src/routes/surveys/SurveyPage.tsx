import { useParams } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import Question from '../../components/surveys/viewer/Question';
import { useSurvey } from '../../hooks/useSurvey';

const SurveysPage = () => {
  let { surveyId } = useParams<'surveyId'>();
  const { survey, error, isLoading } = useSurvey(surveyId as string);

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
            <Question question={q} />
          </li>
        ))}
      </ul>
    </main>
  );
};
export default SurveysPage;
