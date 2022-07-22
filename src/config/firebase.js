import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
  apiKey: "AIzaSyATODcZEknqPYPVTPK5dmKPxJZNC6n9tLc",
  authDomain: "test-eeeaa.firebaseapp.com",
  projectId: "test-eeeaa",
  storageBucket: "test-eeeaa.appspot.com",
  messagingSenderId: "608511246449",
  appId: "1:608511246449:web:ef39dd3477325dc9655bd0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
