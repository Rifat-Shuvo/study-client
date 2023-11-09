import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';

const Take = () => {
const {user} = useContext(AuthContext)
    const handleTake = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const link = form.link.value
        const notes = form.notes.value
        const takemail =  user.email
        const status = 'submitted'
        const take = {name,link,notes,takemail,status}
        
        fetch('https://studyserver.vercel.app/taken', {
            method: 'POST',
            
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(take)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // console.log('true');
                    toast.success('Submitted Assignment Sucessfully')
                }
                else{
                    toast.error('Something Wrong.Try again.')
                }
                // console.log(data);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex justify-center align-center">
               
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleTake} className="card-body">
                    <h1 className="text-center text-2xl font-bold text-rose-600">Submit Your Assignment</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Assignment Name</span>
                            </label>
                            <input type="text" placeholder="Assignment Name" className="input input-bordered" name="name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pdf Link</span>
                            </label>
                            <input type="text" placeholder="Pdf Link" className="input input-bordered" name="link" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Notes</span>
                            </label>
                            <input type="text" placeholder="Short Notes" className="input input-bordered" name="notes"/>
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-error text-white">Submit</button>
                        </div>
                    </form>

                
                </div>
            </div>
        </div>
    );
};

export default Take;