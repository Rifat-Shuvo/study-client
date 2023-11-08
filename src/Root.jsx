import React from 'react';
import Navbar from './Pages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;