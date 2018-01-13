import * as firebase from "firebase";
import config from "../Firebase/firebase-config";


export default function() {

  const initialize = firebase.initializeApp(config);
  
}
