import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();

const SignUpWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    return (
        <div>
        </div>
    );
};

export default SignUpWithGoogle;