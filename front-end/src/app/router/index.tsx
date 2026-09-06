import { createBrowserRouter } from 'react-router';
import { HomePage } from '@/pages/home';
import { Algorithms } from '@/pages/algorithms';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'algorithms',
        element: <Algorithms />,
      },
    ],
  },
]);
