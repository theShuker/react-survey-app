import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import RootLayout from './RootLayout';

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
        element: <p>surveys</p>,
      },
    ],
  },
]);

export default router;
