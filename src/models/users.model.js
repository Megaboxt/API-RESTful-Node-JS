/**
 * Importando Base de datos desde Firebase
 * Importando metodos CRUD para la API
 */
import { errorMessage } from "../utils/errors.utils.js";
import { db } from "./firebase.js";
import {
    collection,
    getDocs,
    doc,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc
} from 'firebase/firestore';


/* ===== Extrayendo collecion desde la Base de Datos ===== */
const usersCollection = collection(db, 'users');


/* Modelo para obtener todos los usuarios */
export const getAllUsers = async () => {
    try {
        const snapshot = await getDocs(usersCollection);
        const users = snapshot.docs.map( doc => ({
            id: doc.id,
            email: doc.email,
            password: doc.password,
            ...doc.data()
        }));

        return users;
    } catch (error) {
        errorMessage(error);
    }
}

/* Modelo para obtener el usuario según el ID */
export const getUserById = async (id) => {
    try {
        const docRef = doc(usersCollection, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const user = {
                id: docSnap.id,
                ...docSnap.data()
            }
            return user;
        } else {
            return null;
        }
    } catch (error) {
        errorMessage(error);
    }
}

/* Modelo para obtener crear un usuario */
export const createUser = async (newUser) => {
    try {
        const docRef = await addDoc(usersCollection, newUser);

        const user = {
            id: docRef,
            ...newUser
        }

        return user;
    } catch (error) {
        errorMessage(error);
    }
}

/* Modelo para actualizar un usuario */
export const updateUser = async (id, updateData) => {
    try {
        const docRef = doc(usersCollection, id);

        await updateDoc(docRef, updateData);

        const updatedUser = {
            id,
            ...updateData
        }

        return updatedUser;
    } catch (error) {
        errorMessage(error);
    }
}

/* Modelo para eliminar un usuario */
export const deleteUser = async (id) => {
    try {
        const docRef = doc(usersCollection, id);

        await deleteDoc(docRef);

        return true;
    } catch (error) {
        errorMessage(error);
        return false;
    }
}