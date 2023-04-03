// Import the functions for authentication
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
// Import the functions for Firestore Database
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjftJdV54aGn-xo8pp6_j8QHlcwd9NmKk",
  authDomain: "mahi-clothing-store.firebaseapp.com",
  projectId: "mahi-clothing-store",
  storageBucket: "mahi-clothing-store.appspot.com",
  messagingSenderId: "362225496775",
  appId: "1:362225496775:web:261b6ed9288c15c9b944e2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// set up Provider (Google) for authentication
const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
    prompt:"select_account"
})
//Set up Singleton instatiation for authentication
export const auth = getAuth();
export const signInWithGOOGLEPopup = () => signInWithPopup(auth, GoogleProvider);
export const signInWithGOOGLeRedirect = () => signInWithRedirect(auth, GoogleProvider);



//Set up Singleton instatiation for firestore
export const db = getFirestore();

export const create_Firestore_UserDocument_From_Auth = async (userAuthInfo, additionalInfo = {}) => {
  console.log(additionalInfo);
  if (!userAuthInfo)
    return
  let usersDocumentReference = doc(db, "users", userAuthInfo.uid);
  let usersSnapshot = await getDoc(usersDocumentReference);
  console.log("USER SNAPSHOT OF SOC EXISTS ",usersSnapshot.exists());

  //if the Document does not exists
  if (!usersSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuthInfo;
    try {
      setDoc(usersDocumentReference, {
        displayName,
        email,
        photoURL,
        createdAt: new Date(),
        ...additionalInfo
      });
    } catch (error) {
      console.log(`Error while creating users ${error}`);
    }
  }
  //if the Document does exists if(!true===false)
  return usersDocumentReference;
}

export const create_AuthenticatedUserWithEmail_n_password = async (email, password) => {
  if (!email || !password)
    return
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signIn_AuthUser_WithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth,email, password);
}