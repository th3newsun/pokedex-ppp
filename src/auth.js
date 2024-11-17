var firebase = require('firebase');
var firebaseui = require('firebaseui');
const firebaseConfig = {
  apiKey: "AIzaSyCiBpq5d1X7cKplmCtvJLrWz8ImGVjfrik",
  authDomain: "pokedex-ppp-db.firebaseapp.com",
  databaseURL: "https://pokedex-ppp-db-default-rtdb.firebaseio.com",
  projectId: "pokedex-ppp-db",
  storageBucket: "pokedex-ppp-db.firebasestorage.app",
  messagingSenderId: "282927312970",
  appId: "1:282927312970:web:920e2401860805ab58b6b3"
};
const app = initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
      }
    ],
  });