import  firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVzhlwLQkvf20vxspjC_X6VEntGwWUItY",
    authDomain: "clone-23e58.firebaseapp.com",
    projectId: "clone-23e58",
    storageBucket: "clone-23e58.appspot.com",
    messagingSenderId: "693246631478",
    appId: "1:693246631478:web:ada4981b7377ee51abc297",
    measurementId: "G-G691XEBJBZ"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };