import React from 'react';

const MyAssign = () => {
    return (
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
                            <th><button className='btn btn-accent'>Give Mark</button></th>
                        </tr>)
                       }
                        
                    </tbody>
                </table>
            </div>
    );
};

export default MyAssign;