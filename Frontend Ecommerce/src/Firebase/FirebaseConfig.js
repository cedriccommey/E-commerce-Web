import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"
import 'firebase/storage'
import 'firebase/analytics'



const firebaseConfig = {
    apiKey: "AIzaSyA3g9hCNxOruPZ_73RroYb_K0qXOv0JkO4",
    authDomain: "reactecommerce-dd5d5.firebaseapp.com",
    projectId: "reactecommerce-dd5d5",
    storageBucket: "reactecommerce-dd5d5.appspot.com",
    messagingSenderId: "159908688826",
    appId: "1:159908688826:web:8e369e1a07904dbf976383",

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };