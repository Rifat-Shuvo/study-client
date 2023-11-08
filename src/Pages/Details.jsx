import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const info = useLoaderData()
    return (
        <div className='mx-7 px-5 h-screen my-auto'>
            <h1 className='m-5 p-5 text-5xl font-bold text-center text-rose-600'>Details of Assignment</h1>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={info.thumbnail} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{info.title}</h2>
                    <p>{info.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-info">Mark{info.total}</div>
                        <div className="badge badge-info">{info.difficulty}</div>
                        <div className="badge badge-info">{info.date}</div>

                    </div>
                    <div className='flex justify-around mt-5'>
                        <Link to='/take'><button className='btn btn-error'>Take Assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;