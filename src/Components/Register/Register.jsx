import React from 'react';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200 hero-content flex-col">
            <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Register!!!</h1>
                    </div>
        {/* ------------------------------------------------ */}
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <button className="btn btn-primary">Sign Up</button>
                            <button className="btn btn-primary">Continue with Google</button>
                            <button className="btn btn-primary">Continue with Facebook</button>
                        </div>
                    </div>
                </div>
        {/* ------------------------------------------------ */}
        </div>
    );
};

export default Register;