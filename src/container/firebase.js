// import firebase from "firebase";
import firebase from 'firebase/compat/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxnE8ksY4OYPvCSGFvc4MBUOWBhJUmohU",
    authDomain: "slack-clone-d7134.firebaseapp.com",
    projectId: "slack-clone-d7134",
    storageBucket: "slack-clone-d7134.appspot.com",
    messagingSenderId: "725947463223",
    appId: "1:725947463223:web:590443f9a7066c0ef7f1b2",
    measurementId: "G-R24LPZ5M6X"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{ auth, provider};
export default db;

