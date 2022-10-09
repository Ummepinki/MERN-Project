// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdhMc1hLsN4s360yqfiXwcBjf2_7y9HTI",
  authDomain: "frontend--task-project.firebaseapp.com",
  projectId: "frontend--task-project",
  storageBucket: "frontend--task-project.appspot.com",
  messagingSenderId: "506161007181",
  appId: "1:506161007181:web:9e5aed76542a75ee4caa04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;