import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA-Q7E0akGhiEbNVtBZKuvbbZhoLArw8pk",
  authDomain: "shop-origin.firebaseapp.com",
  databaseURL: "https://shop-origin.firebaseio.com",
  projectId: "shop-origin",
  storageBucket: "shop-origin.appspot.com",
  messagingSenderId: "1003971999388",
  appId: "1:1003971999388:web:1b2c2dabaa503a0c391f59"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt:'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;