import { 
    initializeApp 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { 
    getFirestore, 
    collection, 
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc
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

async function updateData(collection, id, newData) {
    try {
      await updateDoc(doc(db, collection, id), newData);
      console.log("Documento atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar documento:", error);
    }
  }

  async function deleteData(collection, id) {
    try {
      await deleteDoc(doc(db, collection, id));
      console.log("Documento deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar documento:", error);
    }
  }

  async function createData(collectionName, data) {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log("Documento criado com sucesso! ID:", docRef.id);
    } catch (error) {
      console.error("Erro ao criar documento:", error);
    }
  }


export {getStorage, getDonate, updateData, deleteData, createData};

