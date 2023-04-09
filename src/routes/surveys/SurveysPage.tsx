import Loading from '../../components/common/Loading';
import SurveysList from '../../components/surveys/SurveysList';
import { useSurveys } from '../../hooks/useSurveys';

const SurveysPage = () => {
  const { surveys, error, isLoading, mutate } = useSurveys();

  if (isLoading) return <Loading />;

  return (
    <main className="p-6">
      <h1 className="text-4xl">Available surveys</h1>
      <SurveysList {...{ surveys, mutate }} />
    </main>
  );
};
export default SurveysPage;
