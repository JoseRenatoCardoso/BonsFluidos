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

async function getStorage() {
    try {
        const ref = collection(db, "Storage");
        const snapshot = await getDocs(ref);
        const storage = [];

        snapshot.forEach(doc => {
            const data = doc.data(); 

            storage.push({
                id: data.id || "",
                nome: data.nome || "Sem nome",
                quant: data.qtd <= 0 ? "Sem Estoque": data.qtd,

            });
        });

        return storage;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

async function getDonate() {
    try{
        const ref = collection(db, "Donate");
        const snapshot = await getDocs(ref);
        const donate = [];

        snapshot.forEach(doc => {
            const data = doc.data();

            donate.push({
                id: data.id || ""
            });
        })
    } catch(error){
        console.error(error.massage);
        return [];
    }
}

async function get() {
    try{
        const ref = collection(db, "Donate");
        const snapshot = await getDocs(ref);
        const donate = [];

        snapshot.forEach(doc => {
            const data = doc.data();

            donate.push({
                id: data.id || ""
            });
        })
    } catch(error){
        console.error(error.massage);
        return [];
    }
}


export {getStorage, getDonate};

