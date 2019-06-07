import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAhNajgMyAhkoGR58LkDUk90WqV8Ni3Upw",
    authDomain: "koinstreet-test.firebaseapp.com",
    databaseURL: "https://koinstreet-test.firebaseio.com",
    projectId: "koinstreet-test",
    storageBucket: "koinstreet-test.appspot.com",
    messagingSenderId: "1018834318903"
  };
  firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 