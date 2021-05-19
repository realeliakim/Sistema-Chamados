import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyDB-O2dqdvX9fEufCjajpHpt_A9wuZcPAY",
    authDomain: "sistema-chamados-35c1a.firebaseapp.com",
    projectId: "sistema-chamados-35c1a",
    storageBucket: "sistema-chamados-35c1a.appspot.com",
    messagingSenderId: "304315071619",
    appId: "1:304315071619:web:33fa56e95b7b47a66aefb6",
    measurementId: "G-9G6XB7Q548"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;