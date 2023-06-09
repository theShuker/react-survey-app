import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import RootLayout from './RootLayout';
import SurveysPage from './surveys/SurveysPage';
import SurveyPage from './surveys/SurveyPage';
import CreateSurveyPage from './surveys/CreateSurveyPage';
import SurveyResultsPage from './surveys/SurveyResultsPage';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/surveys',
        children: [
          {
            path: '',
            element: <SurveysPage />,
          },
          {
            path: ':surveyId',
            element: <SurveyPage />,
          },
          {
            path: ':surveyId/results',
            element: <SurveyResultsPage />,
          },
          {
            path: 'create',
            element: <CreateSurveyPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
