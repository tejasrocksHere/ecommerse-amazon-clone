
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  // your Firebase config object here
  apiKey: "AIzaSyB86f_P5FigiQhVighADWaJE9Iu4rAHDbc",
  authDomain: "challenge-3f067.firebaseapp.com",
  projectId: "challenge-3f067",
  storageBucket: "challenge-3f067.appspot.com",
  messagingSenderId: "34519901784",
  appId: "1:34519901784:web:ed53fd7617fcd95fc80c2d",
  measurementId: "G-D3HD0BSF4N"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {  auth };
