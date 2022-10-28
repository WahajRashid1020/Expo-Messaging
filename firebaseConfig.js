import { initializeApp } from "firebase/app";
import "firebase/firestore";
// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAcH71GnXulMs911wZP_xZ-fulEAY7dvn4",
  authDomain: "loadboard-6725d.firebaseapp.com",
  projectId: "loadboard-6725d",
  storageBucket: "loadboard-6725d.appspot.com",
  messagingSenderId: "671150571651",
  appId: "1:671150571651:web:5772a58fb755183237dbb6",
  measurementId: "G-H6X7BNHLK0",
};

export const fireDB = app.firestore();
const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
