import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

const Approute = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/contact',
    element: <ContactUs />,
  },
]);

export default Approute;
