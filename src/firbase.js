// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9Jz3334DXGdjVgJOLEpJUWSKvqTcxFMY",
  authDomain: "chat-f3a3a.firebaseapp.com",
  projectId: "chat-f3a3a",
  storageBucket: "chat-f3a3a.appspot.com",
  messagingSenderId: "296877800359",
  appId: "1:296877800359:web:f8d876239934bb060e1482",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
