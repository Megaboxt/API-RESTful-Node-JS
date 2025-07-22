import jwt from 'jsonwebtoken';

const secret_key = process.env.JWT_SECRET_KEY;

// Genera un token con los datos ingresados / recibidos
export const generateToken = (userData) => {

    /* payload */
    const user = {
        id: userData.id,
        email: userData.email
    };
    const expiration = { expiresIn: "30m"};

    return jwt.sign(user, secret_key, expiration);
}