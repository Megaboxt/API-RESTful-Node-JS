# API RESTFUL en Node JS

API para gestionar usuarios y productos mediante autenticación con JWT, desarrollada en Node y Express JS.  

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
NOTA: **TODAS** las rutas deben autenticarse con un token, excepto la de crear un usuario nuevo y la de `/auth/login`.


## Products Path

Lista de operaciones de la API REST relacionadas a los productos:

- [`GET`](#obtener-todos-los-productos) - /api/products | Obtiene una lista de todos los productos.

- [`GET`](#obtener-un-producto-por-su-id) - /api/products/:id | Obtiene un producto por su ID.

- [`POST`](#crear-un-producto-nuevo) - /api/products/create | Crea un nuevo producto.

- [`PUT`](#actualizar-un-producto) - /api/products/update/:id | Actualiza un producto por su ID.

- [`DELETE`](#eliminar-un-producto) - /api/products/:id | Elimina un producto por su ID.



---  



### Obtener todos los productos

- **GET** `/api/products`
- **Descripción**: Devuelve una lista de todos los productos. Se debe ingresar un Token de autorización en la opción `Bearer`.
- **Respuesta ejemplo:**

```json
[
  {
    "id": "0FbrXFNpBkhCqUaOi1CM",
    "price": 100,
    "name": "Producto Autorizado",
    "description": "Ingresando un nuevo producto autorizado",
    "categories": [
      "Productos autorizados",
      "Mas Productos autorizados"
    ],
    "stock": 10
  }
]
```



### Obtener un producto por su ID  

- **GET** `/api/products/:id`
- **Descripción:** Devuelve un producto específico por su ID. Se debe ingresar un Token de autorización en la opción `Bearer`.
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/api/products/UGCY4MaZquIzk6MI9Nqd`
- **Respuesta ejemplo:**

```json
{
    "id": "UGCY4MaZquIzk6MI9Nqd",
    "price": 100,
    "categories": [
    "Productos",
    "Mas Productos"
    ],
    "name": "Producto 1",
    "stock": 10,
    "description": "Ingresando un nuevo producto"
}
```



### Crear un producto nuevo  

- **POST** `/api/products/create`
- **Descripción**: Crea un nuevo producto. Se debe ingresar un Token de autorización en la opción `Bearer`.
- **Body (JSON):**

```json
{
  "name": "Nuevo Producto Autorizado",
  "price": 100,
  "description": "Ingresando un nuevo producto autorizado",
  "stock": 10,
  "categories": ["Productos autorizados", "Mas Productos autorizados"]
}
```

- **Respuesta ejemplo:**

```json
{
  "id": {
    "type": "firestore/documentReference/1.0",
    "referencePath": "products/Khfqym5hOUPe2NjETIpM"
  },
  "name": "Nuevo Producto",
  "price": 100,
  "description": "Ingresando un nuevo producto autorizado",
  "stock": 10,
  "categories": [
    "Productos autorizados",
    "Mas Productos autorizados"
  ]
}
```



### Actualizar un producto


- **GET** `/api/products/update/:id`
- **Descripción:** Actualiza un producto por su ID. Se debe ingresar un Token de autorización en la opción `Bearer`.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Ejemplo de uso:** /api/products/update/Khfqym5hOUPe2NjETIpM
- **Body (JSON):**

```json
{
  "name": "Updated Product",
  "price": 300,
  "description": "Updating a product",
  "stock": 10,
  "categories": ["Productos", "Mas Productos"]
}
```

- **Respuesta ejemplo:**

```json
{
  "message": "Producto actualizado"
}
```


### Eliminar un producto  

- **GET** `/api/products/:id`
- **Descripción:** Elimina un producto por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a eliminar.
- **Respuesta ejemplo:**

```json
{
  "message": "Producto eliminado correctamete."
}
```


---  


## Users Path

Lista de operaciones de la API REST relacionadas a los usuarios:

- [`GET`](#obtener-todos-los-usuario) - /api/products | Obtiene una lista de todos los productos.

- [`GET`](#obtener-un-usuario-por-su-id) - /api/products/:id | Obtiene un usuario por su ID.

- [`POST`](#crear-un-usuario-nuevo) - /api/products/create | Crea un nuevo usuario.

- [`PUT`](#actualizar-un-usuario) - /api/products/update/:id | Actualiza un usuario por su ID.

- [`DELETE`](#eliminar-un-usuario) - /api/products/:id | Elimina un usuario por su ID.

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


