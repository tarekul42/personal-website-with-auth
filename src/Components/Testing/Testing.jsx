import React from 'react';
import { Form } from 'react-router-dom';

const testing = () => {
   /*  if (password.length < 8) {
        setError('Your Password should at least 8 character.');
        return;
    }
    else if (!/(?=.*[a-zA-Z])/.test(password)) {
        setError('Your Password should contain at least 1 alphabetic character.');
        return;
    }
    else if (!/(?=.*[@^*!#\$%&\?].*)/.test(password)) {
        setError('Your password should contain at least 1 special characters.');
        return;
    }
    else if (!/(?=.*[1-9])/) {
        setError('Your password should contain at least 1 digit.');
        return;
    }
    else {
        setSuccess('Your registration is successfull.')
        setError('')
    } */
    return (
        <>
            {/* <div className="hero min-h-screen hero-content flex-col mx-auto">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <Form className="card flex-shrink-0 w-full max-w-sm xl:max-w-3xl shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Username" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="text" placeholder="Confirm password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </Form>
        </div> */}
        </>
    );
};

export default testing;