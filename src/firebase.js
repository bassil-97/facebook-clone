import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCRcilhhFwQxBr8VzcxGqinlT69tI9ibLU",
    authDomain: "facebook-clone-8547f.firebaseapp.com",
    projectId: "facebook-clone-8547f",
    storageBucket: "facebook-clone-8547f.appspot.com",
    messagingSenderId: "1002840290336",
    appId: "1:1002840290336:web:f679540f85ab371ec07845",
    measurementId: "G-PJDNF8QQR8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;