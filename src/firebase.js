// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHQRzv5SuSCT5K3LkVoaGFoWiwpacpmFo",
    authDomain: "arifmart-e189e.firebaseapp.com",
    projectId: "arifmart-e189e",
    storageBucket: "arifmart-e189e.appspot.com",
    messagingSenderId: "774486480073",
    appId: "1:774486480073:web:346ff1803493ad3df3e918",
    measurementId: "G-BQRV6K1W3H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

