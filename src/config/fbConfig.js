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

//make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();

export default firebase 

/*
db.collection("users").doc("GU0IlFwPcOSePbU2dIFA3ZhqVin2").update({
                firstName: "Bitcoin",
            })
            .then(function() {
                console.log("Document successfully updated!");
            });




const createPost = (post) => {
                return (dispatch, getState, {getFirestore}) => {
                  firestore.collection('posts').update({
                    authorFirstName: "Bitcoin",
                    createdAt: new Date()
                  }).then(() => {
                    dispatch({ type: 'CREATE_POST_SUCCESS' });
                  }).catch(err => {
                    dispatch({ type: 'CREATE_POST_ERROR' }, err);
                  });
                }
              };



if (firebase.auth().collection("users").doc(authRef.currentUser.uid).accessToken != null) {
        //try to make a request
        //current token for user
        const access_token = firebase.auth().collection("users").doc(authRef.currentUser.uid).accessToken
        const refresh_token = firebase.auth().collection("users").doc(authRef.currentUser.uid).refreshToken
        axios.post('https://api.coinbase.com/oauth/token', {
          "grant_type": `${refresh_token}`,
          "client_id": `${client_id}`,
          "client_secret": `${client_secret}`,
          "refresh_token": `${refresh_token}`
        })
        .then(console.log("you reached here"))
      }

      .catch(e => {
            if (e) {
              console.log(e);
            }



*/




