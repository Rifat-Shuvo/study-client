import { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {

    const { createUser, googleSignin, handleUpdateProfile } = useContext(AuthContext)
    
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        //password validation check
        if (password.length<6) {
           toast.error('password must have at least 6 characters')
           return
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('password must have capital letter')
            return
        } 
        if (!/[!@#$%^&*()\-_.+]/.test(password)) {
            toast.error('password must have special character')
            return
        }

        // console.log(name, photo,email,password);
        createUser(email,password)
        .then(res=>{
            handleUpdateProfile(name,photo)
            // setSignupSucess('user register Sucessfully')
               toast.success('user register Sucessfully')
            
            console.log(res)
        })
        .catch(err=>{
            toast.error('Sorry Something Wrong Try again')
            console.log(err);
        })
    }

    const handleGoogle = ()=>{
        googleSignin()
        .then(res=>{
            toast.success('user register Sucessfully')

            console.log(res);
        })
        .catch(err=>{
            toast.error('Sorry Something Wrong Try again')
            console.error(err)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex justify-center align-center">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-center text-2xl font-bold text-rose-600">Register Form</h1>

                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Write Full Name" className="input input-bordered" name="name" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Drop Your Email Here" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                <label className="label">
                                    <p className="label-text-alt">Already have an account? <Link to='/login' className="text-rose-600 font-bold">Login Now.</Link> </p>
                                </label>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-error text-white">Register Now</button>
                        </div>
                    </form>
                    <div className="form-control p-5">
                        <button onClick={handleGoogle} className="btn btn-outline btn-error text-white">Register with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;