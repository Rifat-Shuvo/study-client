import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Submitted = () => {
    const allSubmit = useLoaderData()
    return (
        <div className='p-5'>
            <h1 className='m-5 p-5 text-5xl font-bold text-center text-rose-600'>All Assignment</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>Marks</th> */}
                            <th>Assignment Name</th>
                            <th>Examinee</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        allSubmit.map(item=> <tr key={item._id}>
                           
                            {/* <td></td> */}
                            <td>{item.name}</td>
                            <td>{item.takemail}</td>
                            <td>{item.status}</td>
                            <th><Link to={`/mark/${item._id}`}><button className='btn btn-accent'>Give Mark</button></Link></th>
                        </tr>)
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Submitted;