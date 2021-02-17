import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhqFZVSJ0OYShRWTRhOuAhAJm5Ir3N_8w",
  authDomain: "modulo--clone.firebaseapp.com",
  projectId: "modulo--clone",
  storageBucket: "modulo--clone.appspot.com",
  messagingSenderId: "646653920233",
  appId: "1:646653920233:web:4022abc0044546bb420178",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
