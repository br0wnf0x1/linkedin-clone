import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeMQhntuI2S_n-P0n6x16iXhq-ZOTBjNU",
  authDomain: "linkedin-clone-35bca.firebaseapp.com",
  projectId: "linkedin-clone-35bca",
  storageBucket: "linkedin-clone-35bca.appspot.com",
  messagingSenderId: "769986044996",
  appId: "1:769986044996:web:6fef787e4bc5360fd70811",
  measurementId: "G-T5XBZM72SR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
