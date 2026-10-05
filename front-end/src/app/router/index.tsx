import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { Algorithms } from '@/pages/algorithms';
import { SolvedTasks } from '@/pages/solved_tasks';
import { ReactMechanics } from '@/pages/react_mechanics';
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
      {
        path: 'solved_tasks',
        element: <SolvedTasks />,
      },
      {
        path: 'react_mechanics',
        element: <ReactMechanics />,
      },
    ],
  },
]);
