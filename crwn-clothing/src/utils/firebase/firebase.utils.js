import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5ZlGXjjuoCgNPC46lDyKB_n57HENy6Yg",
  authDomain: "crwn-clothing-db-ab167.firebaseapp.com",
  projectId: "crwn-clothing-db-ab167",
  storageBucket: "crwn-clothing-db-ab167.appspot.com",
  messagingSenderId: "1070536460168",
  appId: "1:1070536460168:web:6346788d6de353d673dc3d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)