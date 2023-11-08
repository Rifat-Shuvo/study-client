import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {

    const {signIn, googleSignin} =useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignin = (e)=>{
        e.preventDefault()
        const form = e.target
        const email =form.email.value
        const password =form.password.value
        // console.log(email,password);
        signIn(email,password)
        .then(res=>{
            toast.success('login successfully')
            navigate(location?.state ? location.state : '/')
            console.log(res);
        })
        .catch(err=>{
            toast.error('wrong credential, try again')
            console.log(err);
        })
    }

    const handleGoogle = ()=>{
        googleSignin()
        .then(res=>{
            toast.success('user register Sucessfully')
            navigate(location?.state ? location.state : '/')
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
                    <form onSubmit={handleSignin} className="card-body">
                    <h1 className="text-center text-2xl font-bold text-rose-600">Login Now</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <p className="label-text-alt">No account? <Link to='/register' className="text-rose-600 font-bold">Register Now</Link> </p>
                            </label>
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-error text-white">Login</button>
                        </div>
                    </form>

                    <div className="form-control p-5">
                            <button onClick={handleGoogle} className="btn btn-outline btn-error text-white">Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;