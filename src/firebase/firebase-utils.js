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

export const createUserProfileDocument = async (userAuth, suplimentarData)=>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
     const {displayName, email } = userAuth;
     const createdAt = new Date();
     try{
         await userRef.set({
         displayName,
         email,
         createdAt,
         ...suplimentarData
       })
     } catch(err){
       console.log('error on firebase', err.message)
     }
   }
  return userRef;
}
 export const addCollectionAndDoc = async(collectionId, objectsToAdd)=>{
   const collectionRef = firestore.collection(collectionId);
   const batch = firestore.batch();
   objectsToAdd.forEach(obj => {
     const newDocRef = collectionRef.doc();
     batch.set(newDocRef, obj)
   })
   return await batch.commit();
 }

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) =>{
  const tranformedCollection = collectionsSnapshot.docs.map(docSnapshot =>{
    const {title, items } = docSnapshot.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items
    }
  })
  return tranformedCollection.reduce((accumulator, collection)=>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{})
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt:'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;