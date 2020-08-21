import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDt5gTvpCNKEaJm6mO4pLTwjlECQihopxg",
    authDomain: "keeper-faee4.firebaseapp.com",
    databaseURL: "https://keeper-faee4.firebaseio.com",
    projectId: "keeper-faee4",
    storageBucket: "keeper-faee4.appspot.com",
    messagingSenderId: "876524755962",
    appId: "1:876524755962:web:f62ddc681aba560b8b2243"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Db=firebase.firestore()

export default Db

