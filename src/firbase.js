// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBwGxugxEEPAYwwHqDbgnv043ulLUZKAnc",
  authDomain: "chat-a3ff6.firebaseapp.com",
  projectId: "chat-a3ff6",
  storageBucket: "chat-a3ff6.appspot.com",
  messagingSenderId: "1055657857554",
  appId: "1:1055657857554:web:b75ca7b130ab7f02687ecb"
};

export const app = initializeApp(firebaseConfig);
export const auth =getAuth();