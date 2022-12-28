import React, { Children } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Library from './layouts/colections/Library';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import ColectionPage from './pages/ColectionPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Page404 from './pages/Page404';
import SearchPage from './pages/SearchPage';
import SignInPage from './pages/SignInPage';

const Router = () => {
    const routes = useRoutes([
        { 
          path: '/',
          element: <DashboardLayout/> ,
          children: [
            {element: <Navigate to='/app'/>, index : true },
            {
                path: 'app',
                element: <DashboardAppPage/>
            },
            {
                path: 'search',
                element: <SearchPage/>
            },
            {
                path: 'colection',
                element: <ColectionPage/>,
                children: [
                  {
                    path:'playlist',
                    element: <Library/>
                  },
                  

                ]
            },
          ]
        },
        {
          path: '404', 
          element: <Page404 />
        },
        {
          path: 'signin',
          element: <SignInPage/>
        },
        {
          path : '*',
          element: <Navigate to='/404' replace/>
        }
    ])
    return routes
};

export default Router;