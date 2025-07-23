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

Información explicita de como esta compuesta la API, que funcionalidades y métodos utiliza.  


## Products Path

Lista de operaciones de la API REST relacionadas a los productos:

- [`GET`](#obtener-todos-los-productos) - /api/products | Obtiene una lista de todos los productos.

- [`GET`](#obtener-un-producto-por-su-id) - /api/products/{id} | Obtiene un producto por su ID.

- [`POST`](#crear-un-producto-nuevo) - /api/products/create | Crea un nuevo producto.

- [`PUT`](#actualizar-un-producto) - /api/products/update/{id} | Actualiza un producto por su ID.

- [`DELETE`](#eliminar-un-producto) - /api/products/{id} | Elimina un producto por su ID.

---  

### Obtener todos los productos


### Obtener un producto por su ID  


### Crear un producto nuevo  


### Actualizar un producto


### Eliminar un producto  




---  


## Users Path

Lista de operaciones de la API REST relacionadas a los usuarios:

- [`GET`](#obtener-todos-los-usuario) - /api/products | Obtiene una lista de todos los productos.

- [`GET`](#obtener-un-usuario-por-su-id) - /api/products/{id} | Obtiene un usuario por su ID.

- [`POST`](#crear-un-usuario-nuevo) - /api/products/create | Crea un nuevo usuario.

- [`PUT`](#actualizar-un-usuario) - /api/products/update/{id} | Actualiza un usuario por su ID.

- [`DELETE`](#eliminar-un-usuario) - /api/products/{id} | Elimina un usuario por su ID.

---  

### Obtener todos los usuarios


### Obtener un usuario por su ID  


### Crear un usuario nuevo  


### Actualizar un usuario


### Eliminar un usuario  



---   

## Auth Path

Lista de operaciones de la API REST relacionadas a la autenticación y seguridad de los datos:  

- [`POST`](#) - /api/auth/login | Genera un token de seguridad temporal para el usuario.


