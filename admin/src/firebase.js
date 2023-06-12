import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAxBdN0ocEGgPBeu2XU_KCoIFE8XSyXH40",
    authDomain: "netflix-d0384.firebaseapp.com",
    projectId: "netflix-d0384",
    storageBucket: "netflix-d0384.appspot.com",
    messagingSenderId: "231958058225",
    appId: "1:231958058225:web:ed341bc7ff30d08b67c550"
  };


  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export default storage;