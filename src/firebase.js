
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyD4WTGI3XUGS3hNhNUNreMT7qBW4IrBLyc",
  authDomain: "chat-b335b.firebaseapp.com",
  databaseURL: "https://chat-b335b-default-rtdb.firebaseio.com",
  projectId: "chat-b335b",
  storageBucket: "chat-b335b.appspot.com",
  messagingSenderId: "655551408827",
  appId: "1:655551408827:web:225a2b290ee7007741579e",
  measurementId: "G-0DT6NPYRTC"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
