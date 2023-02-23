import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzR4oLu8z5weR2LwqvfNd8fAKX142wk3E",
  authDomain: "galaxistore-ae511.firebaseapp.com",
  projectId: "galaxistore-ae511",
  storageBucket: "galaxistore-ae511.appspot.com",
  messagingSenderId: "67934545840",
  appId: "1:67934545840:web:1e56fef252e40f64d19875"
};

const app = initializeApp(firebaseConfig);

export function initFirestore(){
    return app
}