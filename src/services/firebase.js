import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKUzXswqnOZNILZCXb5Jm6sp4JW7waABg",
  authDomain: "tishreen-62882.firebaseapp.com",
  databaseURL: "https://tishreen-62882-default-rtdb.firebaseio.com",
  projectId: "tishreen-62882",
  storageBucket: "tishreen-62882.appspot.com",
  messagingSenderId: "936898727421",
  appId: "1:936898727421:web:a66f6fff8e16cb841cdd94",
  measurementId: "G-VEVR7EJYLB",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
