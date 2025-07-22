/* ===== Importando el Modelo ===== */
import * as Model from '../models/users.model.js';
import { errorServerMessage } from '../middlewares/errors.middleware.js';
import { generateToken } from '../utils/token-generator.js';
import { errorMessage } from '../utils/errors.utils.js';


/* ====== Generar Token  ===== */
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) return res.status(400).json({ error: `El email y el password son obligatorios.`});

        const users = await Model.getAllUsers();

        const findedUser = users.find( user => user.email === email && user.password === password);

        if (findedUser) {
            
            const userToken = { id: findedUser.id, email };
            const token = generateToken(userToken);

            res.status(200).json({ token });
        } else {
            return res.status(401).json(`Las credenciales no coinciden..`);
        }
    } catch (error) {
        errorMessage(error)
        errorServerMessage(error);
    }
}