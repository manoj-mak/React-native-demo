// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA58tTIS0WtLt_mu5CIvZhyXW3NVn9ulTY",
  authDomain: "reactnative-auth-69f42.firebaseapp.com",
  projectId: "reactnative-auth-69f42",
  storageBucket: "reactnative-auth-69f42.appspot.com",
  messagingSenderId: "957064025985",
  appId: "1:957064025985:web:d7778ffb24bfd2ddc8fa80"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };