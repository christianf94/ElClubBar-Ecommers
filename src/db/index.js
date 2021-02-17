import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp ({
    apiKey: process.env.API_KEY,
    authDomain: "el-club-bar.firebaseapp.com",
    projectId: "el-club-bar",
    storageBucket: "el-club-bar.appspot.com",
    messagingSenderId: "604095940762",
    appId: "1:604095940762:web:1f16f599d395341c8a3723"
    })

export function getFirebase() {
    return app;
}

export function getFirestone(){
    return firebase.firestore(app);
}