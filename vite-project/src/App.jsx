import './assets/CSS/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './assets/Pages/Home.jsx';
import Error from './assets/Pages/Error';

function App() {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <Home />,
         errorElement: <Error />,
      },
   ]);

   return <RouterProvider router={router} />;
}

export default App;
