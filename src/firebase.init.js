// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3NfwJI5_z17G4sDIlFp3maKmS-aSdSDA",
  authDomain: "hikehill-web.firebaseapp.com",
  projectId: "hikehill-web",
  storageBucket: "hikehill-web.appspot.com",
  messagingSenderId: "509553321170",
  appId: "1:509553321170:web:9b7460bfa09b884d3bb90b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
