import firebase from 'firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD_EL2Gj5tV8tDNNLijLyD0whfyvoyednU",
  authDomain: "slack-clone-nico.firebaseapp.com",
  projectId: "slack-clone-nico",
  storageBucket: "slack-clone-nico.appspot.com",
  messagingSenderId: "654903527864",
  appId: "1:654903527864:web:7d6b2b05fd3945893da74d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider =  new firebase.auth.GoogleAuthProvider();

export { auth, provider, db}