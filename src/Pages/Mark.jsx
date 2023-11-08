import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Mark = () => {
    const mars = useLoaderData()
    const name = mars.name
    const link = mars.link
    const takemail = mars.takemail
    const handleGivemarks = (e)=>{
        e.preventDefault()
        const form = e.target 
        const mark = form.marks.value 
         const notes = form.notes.value
         const status = 'completed'
         const updateMarks = {name,mark,notes,status,takemail}
         fetch(`http://localhost:5000/mark/${mars._id}`,{
            method: 'PUT',
            
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateMarks)
        })
         .then(res=>res.json())
         .then(data=>{
            console.log(data);
         })
    }
    return (
        <div className='p-5 text-center'>
            <h1 className='m-5 p-5 text-5xl font-bold text-center text-rose-600'>All Assignment</h1>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Link: {link}</p>
                   <p>Notes: {mars.notes}</p>
                </div>
            </div>
            <form className='mt-10 flex flex-col gap-5' onSubmit={handleGivemarks}>
                <input type="number" className="input input-bordered" name="marks" placeholder='Give mark'/>
                <input type="text" className="input input-bordered" name="notes" placeholder='Notes' />
                <div className="card-actions">
                        <button className="btn btn-primary">Submit Now</button>
                    </div>
            </form>
        </div>
    );
};

export default Mark;