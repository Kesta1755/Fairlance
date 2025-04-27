import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import FreelancersPage from './pages/FreelancersPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/freelancers',
    element: <FreelancersPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;