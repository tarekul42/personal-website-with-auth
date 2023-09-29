// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeiysprc5hPPJFKyZm8ITDDRPHJsKnDPA",
  authDomain: "personal-website-with-auth.firebaseapp.com",
  projectId: "personal-website-with-auth",
  storageBucket: "personal-website-with-auth.appspot.com",
  messagingSenderId: "585509307904",
  appId: "1:585509307904:web:581be43d93afa8c08efae5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export the Firebase app instance if needed for other parts of your application
export default app;