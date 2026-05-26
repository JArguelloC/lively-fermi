import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firebaseSignOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebase';
export const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};
export const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};
export const signOut = async () => {
    return firebaseSignOut(auth);
};
export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
};
export const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth, email);
};
