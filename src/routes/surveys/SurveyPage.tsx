import { useParams } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import { useSurvey } from '../../hooks/useSurvey';

const SurveysPage = () => {
  let { surveyId } = useParams<'surveyId'>();
  const { survey, error, isLoading } = useSurvey(surveyId as string);

  if (isLoading) return <Loading />;

  return (
    <main className="p-6">
      <h1 className="text-4xl">{survey?.title}</h1>
      <p>{survey?.description}</p>
      <ul className="flex flex-col gap-2">
        {survey?.questions.map((q, idx) => (
          <li key={q.id}>
            Вопрос {idx}: {q.title}
          </li>
        ))}
      </ul>
    </main>
  );
};
export default SurveysPage;
