import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import cryptoNewsReducer from "./cryptoNewsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  newsReducer: cryptoNewsReducer
});

export default rootReducer;

// the key name will be the data property on the state object
