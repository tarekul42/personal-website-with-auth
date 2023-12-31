import React from 'react';
import { Form } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const loggedUser = userCredential.user;
                console.log(loggedUser);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

        form.reset();

    }

    return (
        <div className="hero min-h-screen hero-content flex-col mx-auto">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <Form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm xl:max-w-3xl shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Your Email" name='email' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Your Password" name='password' className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-outline btn-accent">Login</button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Login;