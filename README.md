# API RESTFUL en Node JS

API para gestionar usuarios y productos mediante autenticación con JWT, desarrollada Node y Express JS.  

URL Base: [https://api-res-tful-node-js.vercel.app/](https://api-res-tful-node-js.vercel.app/)

### Instalación 

1. Clonar el repositorio.

2. Instalar dependencias:

        npm install

3. Configurar variables de entorno:

Copiar las variables del archivo de ejemplo `.env-example` y copiarlas en el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarollo:

        npm run dev


## Documentación de la API  

### Products

Lista de operaciones de la API REST relacionadas a los productos:

- [`GET`](#obtener-todos-los-productos) - /api/products | Obtiene una lista de todos los productos.

- `GET` - /api/products/{id} | Obtiene un producto por su ID.

- `POST` - /api/products/create | Crea un nuevo producto.

- `PUT` - /api/products/update/{id} | Actualiza un producto por su ID.

- `DELETE` - /api/products/{id} | Elimina un producto por su ID.

---  

### Obtener todos los productos
