import { app } from './firebaseConfig'; 
import { getAuth } from 'firebase/auth';  
import firebaseui from 'firebaseui'; 

const auth = getAuth(app);  
const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
    },
  ],
});
