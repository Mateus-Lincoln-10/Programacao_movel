import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPoRx_Llu-9W6LxuHc1dubeVNUclD6WIE",
  authDomain: "projetomovel-2c987.firebaseapp.com",
  projectId: "projetomovel-2c987",
  storageBucket: "projetomovel-2c987.appspot.com",
  messagingSenderId: "480429499514",
  appId: "1:480429499514:web:9f1308645b0ab1a9ed87c3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};