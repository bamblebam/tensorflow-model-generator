import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA6ZHaxj5F2KlPXB1lcDSIUao-LTowPRH8",
    authDomain: "tensorflow-model-generator.firebaseapp.com",
    projectId: "tensorflow-model-generator",
    storageBucket: "tensorflow-model-generator.appspot.com",
    messagingSenderId: "947742925120",
    appId: "1:947742925120:web:0d1d1f1dfe295170595aa5"
};

var app = null
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
}

export default (ctx, inject) => {
    inject('firebase', firebase)
}