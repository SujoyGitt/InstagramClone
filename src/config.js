
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/firestore"
import "firebase/compat/storage"
const firebaseConfig = {
  apiKey: "AIzaSyDtVL-YND4B2MoWohGUS1d-kKiqadarZz8",
  authDomain: "instagram-90498.firebaseapp.com",
  projectId: "instagram-90498",
  storageBucket: "instagram-90498.appspot.com",
  messagingSenderId: "349790959094",
  appId: "1:349790959094:web:08b086fc9abde8537943d7"
};

 firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };