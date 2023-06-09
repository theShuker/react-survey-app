import { useParams } from 'react-router-dom';
import { getSubmissions } from '../../services/SubmissionService';
import { getSurvey } from '../../services/SurveyService';
import { IQuestion, ISubmission } from '../../types/Survey';
import { useSubmissions } from '../../hooks/useSubmissions';
import { useSurvey } from '../../hooks/useSurvey';
import Loading from '../../components/common/Loading';

interface IResultsPageProps {
  params: { id: string };
}

function generateTableHeaderCells(questions: IQuestion[]) {
  return questions.map((q) => (
    <th key={q.id} data-questionid={q.id}>
      {q.title}
    </th>
  ));
}

function generateCellsWithAnswers(questions: IQuestion[], submission: ISubmission) {
  return questions.map((q) => (
    <td key={q.id} data-questionid={q.id}>
      {submission.answers[q.id] ? submission.answers[q.id] : '—'}
    </td>
  ));
}

const SurveyResultsPage = () => {
  let { surveyId } = useParams<'surveyId'>();

  const { survey, error: surveyError, isLoading: surveyIsLoading } = useSurvey(surveyId as string);

  const {
    submissions,
    error: submissionsError,
    isLoading: submissionsIsLoading,
  } = useSubmissions(surveyId as string);

  console.log(submissions);

  if (submissionsIsLoading || surveyIsLoading) return <Loading />;

  return (
    <main className="p-6">
      <h1>Submissions for «{survey.title}»</h1>
      <small>There is {submissions.length} submissions for this survey</small>

      {!!submissions.length && (
        <table className="table-auto border-collapse w-full text-left mt-6">
          <thead>
            <tr className="border-b">{generateTableHeaderCells(survey.questions)}</tr>
          </thead>
          <tbody>
            {submissions.map((s) => (
              <tr className="border-b" key={s.id}>
                {generateCellsWithAnswers(survey.questions, s)}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default SurveyResultsPage;
