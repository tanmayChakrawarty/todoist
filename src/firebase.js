import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA_wgTWJC-Grial5a-YmN7qcoV4YKiZ5BY",
    authDomain: "todo-116d4.firebaseapp.com",
    databaseURL: "https://todo-116d4-default-rtdb.firebaseio.com",
    projectId: "todo-116d4",
    storageBucket: "todo-116d4.appspot.com",
    messagingSenderId: "852680745683",
    appId: "1:852680745683:web:79a98264976d28bff92a26"
})
export {firebaseConfig as firebase};
