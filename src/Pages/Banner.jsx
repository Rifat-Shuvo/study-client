import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="h-[80vh] text-center grid bg-cover bg-[url('/cover.jpg')]">
                <div className="col-start-1 row-start-1 bg-black bg-opacity-20 w-full h-full"></div>
                <div className="col-start-1 row-start-1 mx-auto my-auto">
                    <h1 className='text-7xl font-bold mb-7 text-rose-300'>STUDY HELPER</h1>
                    <p className='text-rose-200 font-bold
                 text-3xl mb-5 p-5'>Our study site features interactive learning modules that allow you to learn at your own pace and in a way that works best for you.</p>
                    <button className='btn font-bold bg-rose-500 text-white border-none'><Link to="/register">Join now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;