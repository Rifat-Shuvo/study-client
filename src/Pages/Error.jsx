import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col h-[80vh] justify-center items-center'>
            <h1 className='text-3xl font-bold mb-6'>Oooopppsssss! An unpexted error occurs.</h1>
            <Link to={"/"}> <button className='btn btn-error text-white'>Go Home</button> </Link>
        </div>
    );
};

export default Error;