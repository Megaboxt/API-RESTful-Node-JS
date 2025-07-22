/* ===== Importando el Modelo ===== */
import * as Model from '../models/products.model.js';
import { errorMessage } from '../utils/errors.utils.js';
import {errorServerMessage} from '../middlewares/errors.middleware.js';


/* ====== Obtener Todos los Productos ===== */
export const getAllProducts = async (req, res) => {
    const products = await Model.getAllProducts();
    return res.status(200).json(products);
}

/* ====== Obtener Producto por ID ===== */
export const getProductById = async (req, res) => {
    const productID = req.params.id;
    const filteredProduct = await Model.getProductById(productID);

    if (!filteredProduct) {
        return res.status(404).json({ error: `Producto no encontrado o no existente.` });
    }
    
    return res.status(200).json(filteredProduct);
}

/* ====== Crear nuevo producto en la BD ===== */
export const createProduct = async (req, res) => {
    const newProduct = req.body;
    const { name, price, description, stock, categories } = newProduct;

    if (name === '' || price === '' || description === '' || stock === '' || categories === '') {
        return res.status(400).json({ error: `Los campos estan vacíos`});
    } else if (price <= 0) {
        return res.status(400).json({ error: `El precio no puede ser cero o negativo.`});
    } else if (stock <= 0) {
        return res.status(400).json({ error: `El stock no puede ser cero o negativo.`});
    } else {
        const createProduct = await Model.createProduct(newProduct);
        return res.status(201).json(createProduct);
    }
}

/* ====== Actualizar Producto ===== */
export const updateProduct = async (req, res) => {
    try {
        const productID = req.params.id;
        const updateData = req.body;
        const { name, price, description, stock, categories }  = updateData;

        const productExist = await Model.getProductById(productID);

        if (!productExist) {
            return res.status(404).json({ error: `Producto no encontrado o no existente.`});
        }

        if (!name || !price || !description || !stock || !categories) {
            return res.status(400).json({ error: `Todos los campos son obligatorios.`});
        } else if (price <= 0) {
            return res.status(400).json({ error: `El precio no puede ser cero o negativo.`});
        } else if (stock <= 0) {
            return res.status(400).json({ error: `El stock no puede ser cero o negativo.`});
        }

        await Model.updateProduct(productID, updateData);
        
        return res.status(200).json({message: `Producto actualizado`});
    } catch (error) {
        errorMessage(error);
        errorServerMessage(error);
    }
}

/* ====== Eliminar Producto ===== */
export const deleteProduct = async (req, res) => {
    try {
        const productID = req.params.id;

        if (!productID || typeof productID !== 'string') {
            return res.status(400).json({ error: `ID de producto inválido` });
        }

        const productExist = await Model.getProductById(productID);

        if (!productExist) {
            return res.status(404).json({ error: `Producto no encontrado o no existente.`});
        }
        await Model.deleteProduct(productID);

        return res.status(200).json({message: `Producto eliminado correctamete.`});
    } catch (error) {
        errorMessage(error);
        errorServerMessage(error);
    }
}