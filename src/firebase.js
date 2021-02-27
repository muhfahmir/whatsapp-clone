import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGqtANUsmr3OcCE7rM4Gmy4jpRjilaRgY",
  authDomain: "whatsapp-clone-97c6d.firebaseapp.com",
  projectId: "whatsapp-clone-97c6d",
  storageBucket: "whatsapp-clone-97c6d.appspot.com",
  messagingSenderId: "891728921180",
  appId: "1:891728921180:web:0fb4d32f2219d3cdc01c99",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
