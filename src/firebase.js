import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaC-RcIHL-bm1HjxWUV1IlNKRyxcV8rkk",
    authDomain: "chat-e67d0.firebaseapp.com",
    projectId: "chat-e67d0",
    storageBucket: "chat-e67d0.appspot.com",
    messagingSenderId: "1013635380956",
    appId: "1:1013635380956:web:49f81655e23e67b7696619"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();