import React from 'react';
import { FaGoogle, FaFacebookF} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Register = () => {

    const handleSignUpWithGoogle = () =>{
        // * Sign Up user with google auth provider
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    return (
        <div className="hero min-h-screen hero-content flex-col mx-auto">
            <div className="text-center">
                <h1 className="text-5xl xl:text-7xl font-bold">Please Register!!!</h1>
            </div>
            {/* ------------------------------------------------ */}
            <div className="card flex-shrink-0 w-full max-w-sm xl:max-w-3xl shadow-2xl">
                <div className="card-body">
                    <div className="form-control mt-6 xl:text-2xl">
                            <NavLink to='/login' className="btn btn-outline btn-accent xl:h-28 xl:text-4xl">
                                Login
                                </NavLink>
                        <NavLink to='/signup' className="btn btn-outline btn-secondary my-2 xl:h-28 xl:text-4xl">Sign Up</NavLink>
                        <button onClick={handleSignUpWithGoogle} className="btn btn-outline btn-error xl:h-28 xl:text-4xl"><FaGoogle />Continue with Google</button>
                        <button className="btn btn-outline btn-info my-2 xl:h-28 xl:text-4xl"><FaFacebookF/>Continue with Facebook</button>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------ */}
        </div>
    );
};

export default Register;