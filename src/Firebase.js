import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyB2f4AmrDHYabdm3ZRb_ST-JH7GVZL1mAQ",
  authDomain: "chatapp-ba054.firebaseapp.com",
  projectId: "chatapp-ba054",
  storageBucket: "chatapp-ba054.appspot.com",
  messagingSenderId: "856760583433",
  appId: "1:856760583433:web:c3c60bf1664b84303bbfd8",
}).auth();