import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCt4Q0r7EVr0wTJ2YJD8hhIGvFwAfafPs",
  authDomain: "travelers-in-egypt.firebaseapp.com",
  projectId: "travelers-in-egypt",
  storageBucket: "travelers-in-egypt.appspot.com",
  messagingSenderId: "412715531296",
  appId: "1:412715531296:web:4f178d380b1d2756739045",
  measurementId: "G-K79SY9X8T3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
