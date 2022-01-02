import { FirebaseApp, initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  initializeAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyCnzW_EFk6Hws-nkV23L7fbcmz0d4bxS2M",
  authDomain: "monumentalhabits.firebaseapp.com",
  projectId: "monumentalhabits",
  storageBucket: "monumentalhabits.appspot.com",
  messagingSenderId: "457063859766",
  appId: "1:457063859766:web:f4ad274ca8e91dcb943a97",
  measurementId: "G-BNNK4E0HTD",
};

class Firebase {
  auth: Auth;
  app: FirebaseApp;
  constructor() {
    this.app = initializeApp(firebaseConfig);

    this.auth = initializeAuth(this.app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  }

  doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    createUserWithEmailAndPassword(this.auth, email, password);

  doSignInWithEmailAndPassword = (email: string, password: string) =>
    signInWithEmailAndPassword(this.auth, email, password);

  doPasswordReset = (email: string) => sendPasswordResetEmail(this.auth, email);

  doPasswordUpdate = (password: string) =>
    this.auth.currentUser && updatePassword(this.auth.currentUser, password);

  doSignOut = () => signOut(this.auth);
}

export default Firebase;
