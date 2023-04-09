import { Link } from 'react-router-dom';
import { deleteSurvey } from '../../services/SurveyService';
import { ISurvey } from '../../types/Survey';

interface ISurveysList {
  surveys: ISurvey[] | undefined;
  mutate?: any;
}

const SurveysList = ({ surveys, mutate }: ISurveysList) => {
  if (!surveys?.length) return <p>No surveys to display...</p>;

  return (
    <ul className="flex flex-col gap-2">
      {surveys.map((survey) => (
        <SurveysList.Item {...{ key: survey.id, survey, mutate }} />
      ))}
    </ul>
  );
};

SurveysList.Item = ({ survey, mutate }: { survey: ISurvey; mutate: any }) => (
  <li key={survey.id} className="rounded p-3 bg-slate-50">
    <h2 className="text-lg">{survey.title}</h2>
    {survey.description && <h3>{survey.description}</h3>}
    <Link to={`/surveys/${survey.id}`} className="bg-slate-200 px-4 py-1 text-sm">
      View
    </Link>
    <button
      className="bg-red-200 px-4 py-1 text-sm"
      onClick={async () => {
        await deleteSurvey(survey.id);
        mutate();
      }}>
      Delete
    </button>
  </li>
);

export default SurveysList;
