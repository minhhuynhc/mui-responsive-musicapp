import React, { Children } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import DashboardAppPage from './pages/DashboardAppPage';

const Router = () => {
    const routes = useRoutes([

        { 
            path: '/dashboard',
          element: <DashboardLayout/> ,
          children: [
            {element: <Navigate to='/dashboard/app'/> },
            {
                path: 'app',
                element: <DashboardAppPage/>
            },
            // {
            //     path: 'user',
            //     element: <UserPage/>
            // },
            // {
            //     path: 'product',
            //     element: <ProductPage/>
            // },
            // {
            //     path: 'blog ',
            //     element: <BlogPage/>
            // }
          ]
        },
        {

        }
    ])
    return routes
};

export default Router;