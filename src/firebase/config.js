import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'    


const firebaseConfig = {                                  // on project changing, update this section
    apiKey: "AIzaSyD6oSuNeAUBpjcYNULIdVsL12tsglWGaDk",
    authDomain: "muso-ninjas-72348.firebaseapp.com",
    projectId: "muso-ninjas-72348",
    storageBucket: "muso-ninjas-72348.appspot.com",
    messagingSenderId: "73024552377",
    appId: "1:73024552377:web:fd555afea519e4be278a68"
  };

 //init firebase
 firebase.initializeApp(firebaseConfig)   //firebaseConfig is const name from paste code

 //init firestore service
 const projectAuth=firebase.auth()    

 const projectFirestore= firebase.firestore()

 // for store timestamp
 const timestamp=firebase.firestore.FieldValue.serverTimestamp   //Optional, if you want to make timestamp column

 export { projectAuth,projectFirestore, timestamp }  