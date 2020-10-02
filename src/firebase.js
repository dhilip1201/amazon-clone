import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCk5WX8vdQ-XgOF4cW_MHmYY8fpMS2kAQ4",
    authDomain: "dhilip-amazan-project.firebaseapp.com",
    databaseURL: "https://dhilip-amazan-project.firebaseio.com",
    projectId: "dhilip-amazan-project",
    storageBucket: "dhilip-amazan-project.appspot.com",
    messagingSenderId: "571879884950",
    appId: "1:571879884950:web:671480e90dc11210f99ab7",
    measurementId: "G-J7SQD99H0K"
})
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
