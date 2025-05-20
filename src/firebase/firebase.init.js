// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj93ufndsYLnQfPeJ_kLZmOFJ9gDIfImM",
    authDomain: "group-auth-ce543.firebaseapp.com",
    projectId: "group-auth-ce543",
    storageBucket: "group-auth-ce543.firebasestorage.app",
    messagingSenderId: "267904591235",
    appId: "1:267904591235:web:6a7e2aadda7eeb015a42b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);