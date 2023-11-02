import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZi3YPEMSwFYS8BKNy_iRQnzdfwdQ3Rzs",
    authDomain: "linkedin-clone-f3489.firebaseapp.com",
    projectId: "linkedin-clone-f3489",
    storageBucket: "linkedin-clone-f3489.appspot.com",
    messagingSenderId: "702898573238",
    appId: "1:702898573238:web:94c1598c30e60294d3bb17",
    measurementId: "G-3WZ67KPJLV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };