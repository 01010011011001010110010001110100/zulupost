import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVqu6Cwguhhvp9uA8AqZHHapayUzSu_oU",
  authDomain: "zuluposts-852a0.firebaseapp.com",
  projectId: "zuluposts-852a0",
  storageBucket: "zuluposts-852a0.appspot.com",
  messagingSenderId: "893815570005",
  appId: "1:893815570005:web:2b5c76326c36e735745edc",
  measurementId: "G-S0NSS103TD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };