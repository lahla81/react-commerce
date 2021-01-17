import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

const config ={
    apiKey: "AIzaSyCuATLgYpzR-QfnKkL-pgV0_IJ-s3KjbgI",
    authDomain: "healthydam-db.firebaseapp.com",
    projectId: "healthydam-db",
    storageBucket: "healthydam-db.appspot.com",
    messagingSenderId: "514263680119",
    appId: "1:514263680119:web:8f5a04f4cd0c861d6c7272",
    databaseURL: 'https://healthdam-db.firebaseio.com',
    }

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();   

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.massage)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
