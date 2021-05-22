import { firebase } from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";


var firebaseConfig = {
  apiKey: "AIzaSyDZSCOLt-EEk1VyoKEy8QynB-IdAMLeEKM",
  authDomain: "chat-app-390ce.firebaseapp.com",
  projectId: "chat-app-390ce",
  storageBucket: "chat-app-390ce.appspot.com",
  messagingSenderId: "557848674867",
  appId: "1:557848674867:web:c1f9b40b7756e930329946",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
