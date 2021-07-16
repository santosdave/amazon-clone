// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCQv2opm7pkCkz-2jUycJwUzH-OhbOM7Kk",
    authDomain: "clone-269b5.firebaseapp.com",
    databaseURL:"https://clone-269b5-default-rtdb.firebaseio.com/",
    projectId: "clone-269b5",
    storageBucket: "clone-269b5.appspot.com",
    messagingSenderId: "857256150268",
    appId: "1:857256150268:web:dcc1d50bc2e73330ce8379",
    measurementId: "G-YC3B6E62SP"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig); 
const db= firebaseApp.firestore();
const auth=firebaseApp.auth();
export {db, auth};
