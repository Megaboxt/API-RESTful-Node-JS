import { db } from './firebase.js';
import {
    collection,
    getDocs,
    doc,
    getDoc,
    addDoc,
    setDoc,
    deleteDoc,
    updateDoc
} from 'firebase/firestore';
import { errorMessage } from '../utils/errors.utils.js';

// Trayendo la collecion de productos desde la DB
const productsCollection = collection(db, 'products');

/* Modelo para obtener todos los productos */
export const getAllProducts = async () => {
    try {
        const snapshot = await getDocs(productsCollection);
        const products = snapshot.docs.map( doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return products;
    } catch (error) {
        errorMessage(error);
    }
}

/* Modelo para obtener el producto según el ID */
export const getProductById = async (id) => {
    try {
        const docRef = doc(productsCollection, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const product = {
                id: docSnap.id,
                ...docSnap.data()
            }
            return product;
        } else {
            return null;
        }
    } catch (error) {
        errorMessage(error);
    }
}

/* Modelo para obtener crear un producto */
export const createProduct = async (newProduct) => {
    try {
        const docRef = await addDoc(productsCollection, newProduct);

        const product = {
            id: docRef,
            ...newProduct
        }

        return product;
    } catch (error) {
        errorMessage(error);
    }
}

/* Modelo para actualizar un producto */
export const updateProduct = async (id, updateData) => {
    try {
        const docRef = doc(productsCollection, id);

        await updateDoc(docRef, updateData);

        const updatedProduct = {
            id,
            ...updateData
        }

        return updatedProduct;
    } catch (error) {
        errorMessage(error);
    }
}

/* Modelo para eliminar un producto */
export const deleteProduct = async (id) => {
    try {
        const docRef = doc(productsCollection, id);

        await deleteDoc(docRef);

        return true;
    } catch (error) {
        errorMessage(error);
        return false;
    }
}