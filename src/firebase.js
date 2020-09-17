import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBFBB4-yKOvWsVOMmyspZQKjaqoZWUDKic",
    authDomain: "dhilip-amazan-clone.firebaseapp.com",
    databaseURL: "https://dhilip-amazan-clone.firebaseio.com",
    projectId: "dhilip-amazan-clone",
    storageBucket: "dhilip-amazan-clone.appspot.com",
    messagingSenderId: "427522433779",
    appId: "1:427522433779:web:213d9fcb185c70bafb0d86",
    measurementId: "G-36KRB2Q6BB"
})
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
