import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleSignUpEmail = (event) =>{
        const email = event.target.value;
        setEmail(email)

        /* if(!/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.text(email)){
            setError('Please use a valid Email')
        } */
        console.log(email); 
    }

    const handleSignUpPassword = event =>{
        const inputPassword = event.target.value;
        setPassword(inputPassword);
        
        setPasswordError('')
        if(inputPassword.length < 8){
            setPasswordError("Your password must minimum 8 characters");
            return;
        }
        else if (!/(?=.*[a-zA-Z])/.test(inputPassword)) {
            setPasswordError("Your password must contain 1 Alphabetic letter");
            return;
        }
        else if (!/(?=.*[@^*!#\$%&\?].*)/.test(inputPassword)) {
            setPasswordError('Your password should contain at least 1 special characters.');
            return;
        }
        else if (!/(?=.*[1-9])/.test(inputPassword)) {
            setPasswordError("Your password must contain 1 digit");
            return;
        }
        else{
            setPasswordError('');
        }

        console.log(inputPassword);
    }

    const handleSignUpConfirmPassword = event =>{
        const inputConfirmPassword = event.target.value;
        setConfirmPassword(inputConfirmPassword);

        if(inputConfirmPassword.length < 1){
            setConfirmPasswordError("");
            return;
        }
        else if(password !== inputConfirmPassword){
            setConfirmPasswordError("Your Password didn't match.");
            return;
        }
        else{
            setConfirmPasswordError("");
        }
    }

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(username, email, password, confirmPassword);


        // !* Sign Up user with email and password
         createUserWithEmailAndPassword(auth, email, password)
             .then((userCredential) => {
                 const loggedUser = userCredential.user;
                 console.log(loggedUser);
                 setPasswordError('');
                 setEmailError('');
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
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                </div>
                <Form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm xl:max-w-3xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Username" name='username' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Your Email" value={email} onChange={handleSignUpEmail} name='email' className="input input-bordered" required />
                            {emailError && <p><small className='text-danger'>{emailError}</small></p> }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Set Your Password" value={password} onChange={handleSignUpPassword} name='password' className="input input-bordered" required />
                            {passwordError && <p><small>{passwordError}</small></p> }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" placeholder="Confirm Your password" value={confirmPassword} onChange={handleSignUpConfirmPassword} name='confirmPassword' className="input input-bordered" required />
                            {confirmPasswordError && <p><small>{confirmPasswordError}</small></p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-outline btn-secondary">Sign Up</button>
                        </div>
                    </div>
                </Form>
            </div>
        );
    };

    export default SignUp;