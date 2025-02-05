import { createBrowserRouter } from 'react-router-dom';
import PublicLoyout from './routes/publicLayout';
import Clock from './routes/Clock';
import TableUsers, { loader as userLoader, action as userAction } from './routes/TableUsers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLoyout />,
    errorElement: <div>Oops! There was an error</div>,
    children: [
      {
        errorElement: <div>Oops! There was an error in a child</div>,
        children: [
          {
            path: 'clock',
            element: <Clock />,
          },
          {
            path: 'people',
            element: <TableUsers />,
            loader: userLoader,
            action: userAction,
          },
          // {
          //   path: 'users/:userId',
          //   element: <User />,
          //   loader: userLoader,
          //   action: userAction,
          // },
        ],
      },
    ],
  },
]);

export default router;
