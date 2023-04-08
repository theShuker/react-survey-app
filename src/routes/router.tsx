import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import RootLayout from './RootLayout';
import SurveysPage from './surveys/SurveysPage';
import SurveyPage from './surveys/SurveyPage';

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
        ],
      },
    ],
  },
]);

export default router;
