import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
    apiKey: "AIzaSyCGW_wCSv4fc9AMU-Sko1PqrthxJaa3C7w",
    authDomain: "mini-project-1-d3102.firebaseapp.com",
    projectId: "mini-project-1-d3102",
    storageBucket: "mini-project-1-d3102.appspot.com",
     messagingSenderId: "662688866501",
    appId: "1:662688866501:web:d9eafe7aeea68ee957d0ac"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };