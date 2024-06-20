import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE__APP_ID
};

//Initialize firebase
const app = initializeApp(firebaseConfig);
//auth es una referencia que jutno con los config/credenciales nos permita acceder a nuestro modulo de autenticación de firebase
const auth = getAuth(app);

export {
  auth
}
