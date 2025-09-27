import { useState } from 'react';
import './assets/CSS/App.css';
import { createBrowserRouter } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './Components/Banner.jsx';
import Main from './components/Main';

function App() {
   //const router = createBrowserRouter();

   return (
      <>
         <Header />
         <Banner />
         <Main />
         <Footer />
      </>
   );
}

export default App;
