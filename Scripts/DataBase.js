import { 
    initializeApp 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { 
    getFirestore, 
    collection, 
    getDocs 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

 const firebaseConfig = {
    apiKey: "AIzaSyB3mFywI84hXOvQmz0LDi6dgl704sEbuH8",
    authDomain: "certificadora-de-competencia.firebaseapp.com",
    projectId: "certificadora-de-competencia",
    storageBucket: "certificadora-de-competencia.firebasestorage.app",
    messagingSenderId: "816825012857",
    appId: "1:816825012857:web:13d8331e28d984896bbaa8",
    measurementId: "G-EV20D2FPPH"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

