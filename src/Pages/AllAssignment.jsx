import React, { useState } from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const AllAssignment = () => {
    const {user} = useContext(AuthContext)
    const allDatas = useLoaderData()
    const [allData,setAllData]=useState(allDatas)
    // console.log(allData);

    const handleDelete = (_id, email) => {
        // console.log(_id, email, user.email)
if (user.email === email) {
    console.log(email);
    fetch(`https://studyserver.vercel.app/assign/${_id}/${email}`,{
            method : 'DELETE',
            
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('Deleted Successfully')
            const remaining = allData.filter(data => data._id !== _id)
            setAllData(remaining)
            console.log(data);
        })
}else{
    toast.error('You do not delete this assignment!')
}
        // fetch(`https://studyserver.vercel.app/assign/${_id}/${email}`,{
        //     method : 'DELETE',
            
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     toast.success('Deleted Successfully')
        //     const remaining = allData.filter(data => data._id !== _id)
        //     setAllData(remaining)
        //     console.log(data);
        // })
    }
    return (
        <div>
            <Banner></Banner>
            <h1 className='m-5 p-5 text-5xl font-bold text-center text-rose-600'>All Assignment</h1>

            {/* assignment showing */}
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-5 p-5'>

                {
                    allData.map(item => <div key={item._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={item?.thumbnail} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item.title}
                                <div className="badge badge-secondary">Mark:{item.total}</div>
                            </h2>
                            <p>{item.description}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{item.difficulty}</div>
                                <div className="badge badge-outline">{item.date}</div>
                            </div>
                            <div className='flex justify-around mt-5'>
                                <Link to={`/detail/${item._id}`}><button className='btn btn-error text-white'>details</button></Link>
                                <Link to={`/update/${item._id}`}><button className='btn btn-error text-white'>update</button></Link>
                                <button onClick={() => handleDelete(item._id, item.useremail)} className='btn btn-error text-white'>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllAssignment;