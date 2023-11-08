
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const Add = () => {
    const update = useLoaderData()
    const {user} = useContext(AuthContext)
    const handleAdd = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const thumbnail = form.thumbnail.value
        const total = form.total.value
        const difficulty = form.difficulty.value
        const date = form.date.value
        const description = form.description.value
        const useremail = user.email
        // console.log(title,thumbnail,total, date, description);
        const updatedAssignment = { title, thumbnail, total, date, description, difficulty,useremail }
        // console.log(newAssignment);
        fetch(`https://studyserver.vercel.app/update/${update._id}`, {
            method: 'PUT',
            
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedAssignment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // console.log('true');
                    toast.success('updateded Assignment Sucessfully')
                }
                else{
                    toast.error('Something Wrong.Try again.')
                }
                console.log(data);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex justify-center align-center">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleAdd} className="card-body">
                        <h1 className="text-center text-2xl font-bold text-rose-600">Update Assignment</h1>
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" placeholder="Assignment Title" className="input input-bordered" name="title" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Thumbnail URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered" name="thumbnail" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total Marks</span>
                                </label>
                                <input type="number" placeholder="Assignment Total Marks" className="input input-bordered" name="total" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Assignment Difficulty</span>
                                </label>
                                <input type="text" placeholder="(easy,medium,hard)" className="input input-bordered" name="difficulty" required />
                            </div>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Assignment Date</span>
                            </label>
                            <input type="date" placeholder="" className="input input-bordered" name="date" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="Assignment Description" className="input input-bordered" name="description" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-error text-white">Update Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Add;