import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - config here

const firebaseConfig = {
  apiKey: "AIzaSyB3d7z_HnxkRNSYfkHD5fWGMKPnMx492d4",
  authDomain: "codegeekxyz.firebaseapp.com",
  databaseURL: "https://codegeekxyz.firebaseio.com",
  projectId: "codegeekxyz",
  storageBucket: "codegeekxyz.appspot.com",
  messagingSenderId: "882638141753",
  appId: "1:882638141753:web:51baf4e6186444077090e8",
  measurementId: "G-L8MJDG0JGE",
};

firebase.initializeApp(firebaseConfig);

//utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection reference
const usersCollection = db.collection("users");

// export utill and collections
export { db, auth, usersCollection };
