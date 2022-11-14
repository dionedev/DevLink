import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA6I29z-j3rl8XkOVTnIUUNv0oLKqa9Drc",
  authDomain: "devlinks-1dfe2.firebaseapp.com",
  projectId: "devlinks-1dfe2",
  storageBucket: "devlinks-1dfe2.appspot.com",
  messagingSenderId: "12040829871",
  appId: "1:12040829871:web:769243e41bf00b15538d5a",
  measurementId: "G-38KHEPV1P2"
};

const firebaseApp = initializeApp(firebaseConfig) // Inicia o firebaseApp com a seguinte configuração

const database = getFirestore(firebaseApp) // Banco de dados para gravar os links
const auth = getAuth(firebaseApp) // Sistema de autenticação

export { database, auth };
