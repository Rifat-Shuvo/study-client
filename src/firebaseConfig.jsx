// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDQo-eeE6VjtkVuZlGvOCNkUwBgDD_EzY",
  authDomain: "studyh-3f60b.firebaseapp.com",
  projectId: "studyh-3f60b",
  storageBucket: "studyh-3f60b.appspot.com",
  messagingSenderId: "158312173628",
  appId: "1:158312173628:web:8f08e02a74436253983339"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth