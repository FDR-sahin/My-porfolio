import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9ZXLY1PkkRjyZ4J5oXA7-Bb9-l0D5zws",
  authDomain: "sahin-portfolio.firebaseapp.com",
  projectId: "sahin-portfolio",
  storageBucket: "sahin-portfolio.firebasestorage.app",
  messagingSenderId: "634397341924",
  appId: "1:634397341924:web:85806513f0bc2b407314f1",
  databaseURL: "https://sahin-portfolio-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);