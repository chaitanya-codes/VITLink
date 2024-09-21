// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4PPQoO-EHEmZw9B4iltINuq91gXYGhHs",
  authDomain: "vitink-55b89.firebaseapp.com",
  projectId: "vitink-55b89",
  storageBucket: "vitink-55b89.appspot.com",
  messagingSenderId: "7888712947",
  appId: "1:7888712947:web:3b204896c6b18bc1037386",
  measurementId: "G-ZKJVTS3LEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = app.database();
async function addEmail(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }