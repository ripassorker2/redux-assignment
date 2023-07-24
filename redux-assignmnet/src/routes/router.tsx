import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // {
      //   index: true,
      //   element: <Home />,
      // },
      {
        path: '/',
        element: <p>Componment</p>,
      },
      
    ],
  },
  
  {
    path: '*',
    element: <p>Not found.....................</p>,
  },
]);

export default routes;