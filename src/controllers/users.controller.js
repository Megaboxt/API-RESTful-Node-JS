/* ===== Importando el Modelo ===== */
import * as Model from '../models/users.model.js';
import { errorMessage } from '../utils/errors.utils.js';
import { errorServerMessage } from '../middlewares/errors.middleware.js';


/* ====== Obtener Todos los Usuarios ===== */
export const getAllUsers = async (req, res) => {
    try {
        const users = await Model.getAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        errorMessage(error);
    }
}

/* ====== Obtener Usuario por ID ===== */
export const getUserById = async (req, res) => {
    try {
        const userID = req.params.id;
        const filteredUser = await Model.getUserById(userID);

        if (!filteredUser) {
            return res.status(404).json({ error: `Usuario no encontrado o no existente.` });
        }
        
        return res.status(200).json(filteredUser);
    } catch (error) {
        errorMessage(error);
    }
}

/* ====== Crear nuevo usuario en la BD ===== */
export const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const { email, password } = newUser;

        if (!email || !password) {
            return res.status(400).json({ error: `Los campos estan vacíos`});
        } else {
            const createUser = await Model.createUser(newUser);
            return res.status(201).json(createUser);
        }
    } catch (error) {
        errorMessage(error);
        errorServerMessage(error);
    }
}

/* ====== Actualizar Usuario ===== */
export const updateUser = async (req, res) => {
    try {
        const userID = req.params.id;
        const updateData = req.body;
        const { email, password }  = updateData;

        const userExist = await Model.getUserById(userID);

        if (!userExist) {
            return res.status(404).json({ error: `Usuario no encontrado o no existente.`});
        }

        if (!email || !password) {
            return res.status(400).json({ error: `Todos los campos son obligatorios.`});
        }

        await Model.updateUser(userID, updateData);
        
        return res.status(200).json({message: `Usuario actualizado`});
    } catch (error) {
        errorMessage(error);
        errorServerMessage(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userID = req.params.id;

        if (!userID || typeof userID !== 'string') {
            return res.status(400).json({ error: `ID de usuario inválido` });
        }

        const userExist = await Model.getUserById(userID);

        if (!userExist) {
            return res.status(404).json({ error: `Usuario no encontrado o no existente.`});
        }
        await Model.deleteUser(userID);

        return res.status(200).json({message: `Usuario eliminado correctamete.`});
    } catch (error) {
        errorMessage(error);
        errorServerMessage(error);
    }
}