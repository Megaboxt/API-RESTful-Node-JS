import jwt from 'jsonwebtoken';

export const authentication = (req, res, next) => {
    const secret_key = process.env.JWT_SECRET_KEY;
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, secret_key, (err) => {
        if (err) return res.sendStatus(403);

        next();
    });

    
}