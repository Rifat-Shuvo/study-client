import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Root from '../Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Add from '../Pages/Add';
import PrivateRoutes from '../Providers/PrivateRoutes';
import AllAssignment from '../Pages/AllAssignment';
import Details from '../Pages/Details';
import Update from '../Pages/Update';
import Take from '../Pages/Take';
import Submitted from '../Pages/Submitted';
import Mark from '../Pages/Mark';
import Error from '../Pages/Error';



const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error> ,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addnew',
                element: <PrivateRoutes><Add></Add></PrivateRoutes>
            },
            {
                path:'/all',
                element: <AllAssignment></AllAssignment>,
                loader: () => fetch('https://studyserver.vercel.app/allassign')
            },
            {
                path: '/detail/:id',
                element: <PrivateRoutes><Details></Details></PrivateRoutes>,
                loader : ({params})=> fetch(`https://studyserver.vercel.app/details/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><Update></Update></PrivateRoutes>,
               loader : ({params})=> fetch(`https://studyserver.vercel.app/details/${params.id}`)
            },
            {
                path:'/take',
                element : <PrivateRoutes><Take></Take></PrivateRoutes>
            },
            {
                path: '/submitted',
                element:<PrivateRoutes><Submitted></Submitted></PrivateRoutes>,
                loader : ()=> fetch('https://studyserver.vercel.app/takens')
            },
            {
                path: '/mark/:id',
                element:<Mark></Mark>,
                loader : ({params})=> fetch(`https://studyserver.vercel.app/mark/${params.id}`)
            }
            
        ]
    },
    
])

export default Routes;