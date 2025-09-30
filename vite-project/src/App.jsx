import './assets/CSS/App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import Home from './assets/Pages/Home.jsx';
import Error from './assets/Pages/Error';
import A_Propos from './assets/Pages/A_Propos.jsx';
import Root from './assets/Pages/Root';

function App() {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <Root />,
         errorElement: <Error />,
         children: [
            {
               index: true,
               element: <Home />,
            },
            {
               path: 'A_propos',
               element: <A_Propos />,
            },
         ],
      },
   ]);

   return <RouterProvider router={router} />;
}

export default App;
