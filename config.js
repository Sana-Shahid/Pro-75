import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDqJ_jv9ujwYjJBwn2Zj2vxpiNduEGJDdg",
  authDomain: "e-ride-stage-4-7c620.firebaseapp.com",
  projectId: "e-ride-stage-4-7c620",
  storageBucket: "e-ride-stage-4-7c620.appspot.com",
  messagingSenderId: "357197295048",
  appId: "1:357197295048:web:f61cdbe7913d6c0c8fa4fd"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
