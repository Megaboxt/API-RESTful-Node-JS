import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRouter from './src/routes/auth.routes.js';
import usersRouter from './src/routes/users.routes.js';
import productsRouter from './src/routes/products.routes.js';
import { notFoundPath } from './src/middlewares/errors.middleware.js';
import { authentication } from './src/middlewares/auth.middleware.js';


const app = express();
const PORT = process.env.PORT || 3007;

// Middleware de Express que sirve para leer peticiones y convertir los datos en JSON
app.use(express.json());

// Middleware CORS - Permite todos los orígenes
app.use(cors());

// Middleware global para leer las peticiones enviadas en formato JSON
// app.use(bodyParser.json());

/* ===== Creando Rutas (Endpoints) ====== */
app.get('/', (req, res) => {
    res.json({ message: `API RESTful en Node JS`});
});

app.use('/api', authRouter);

app.use('/api', usersRouter);

app.use('/api', authentication, productsRouter);


/* ===== Error Handle ====== */
app.use(notFoundPath);


/* ===== Escuchando el puerto del Servidor ===== */
app.listen( PORT, () => console.log(`http://localhost:${PORT}`));