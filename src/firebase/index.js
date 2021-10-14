import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2ma3SV8Zr5q1eDGf-g72s-x8SnRiyiMI",
  authDomain: "iyoungcyber.firebaseapp.com",
  projectId: "iyoungcyber",
  storageBucket: "iyoungcyber.appspot.com",
  messagingSenderId: "257227110490",
  appId: "1:257227110490:web:5e49bad0459f8b875e0063",
  measurementId: "G-J8FQ4YHYV1"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();
