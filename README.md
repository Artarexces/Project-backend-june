# Project-backend-Biblioteca-Digital

API RESTful de Biblioteca Digital construida con Node.js, Express, TypeScript y MongoDB siguiendo el patrón MVC.

---

## 📖 Descripción ##

Esta aplicación brinda un servicio de gestión de libros para una “Biblioteca Digital”. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de libros almacenados en MongoDB. Cada libro posee los siguientes campos:

- **title** (string, requerido, único)  
- **author** (string, requerido)  
- **publishedYear** (number, opcional)  
- **genre** (string, opcional)  
- **available** (boolean, por defecto `true`)

    - Las rutas expuestas son:

| Método | Ruta             | Descripción                       |
|:------:|:-----------------|:----------------------------------|
| GET    | `/api/books`     | Listar todos los libros           |
| GET    | `/api/books/:id` | Obtener un libro por su ID        |
| POST   | `/api/books`     | Crear un nuevo libro              |
| PATCH  | `/api/books/:id` | Actualizar un libro existente     |
| DELETE | `/api/books/:id` | Eliminar un libro existente       |

Todas las respuestas JSON siguen el formato estándar:

```json
{
  "success": boolean,
  "data"?: any,
  "message"?: string
}
```

🛠️ Tecnologías

Lenguaje: TypeScript

Servidor: Node.js + Express

Base de datos: MongoDB (Mongoose)

Patrón de diseño: MVC (Modelo–Vista–Controlador)

Variables de entorno: dotenv

Control de versiones: Git

📁 Estructura de carpetas
```graphql
Copiar
Editar
Project-backend-june/
│
├── src/
│   ├── config/
│   │   └── db.ts              
│   │
│   ├── controllers/
│   │   └── booksControllers.ts 
│   │
│   ├── interfaces/
│   │   ├── IBook.ts            
│   │   └── ApiRes.ts           
│   │
│   ├── models/
│   │   └── booksModels.ts      
│   │
│   ├── routes/
│   │   └── booksRoutes.ts      
│   │               
│   │
│   └── index.ts                
│
├── .env.example                
├── .gitignore                  
├── package.json                
├── package-lock.json           
└── tsconfig.json               

```

🔧 Configuración e instalación
Clonar el repositorio

```bash
git clone https://github.com/Artarexces/Project-backend-june.git
cd Project-backend-june
Instalar dependencias
```
```bash
npm install
Variables de entorno
```
Copiar el archivo de ejemplo y renombrarlo a .env:

```bash
cp .env.example .env
Editar el .env y completar con tus propios valores. Por ejemplo:
```
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/biblioteca
```
Levantar MongoDB

Asegúrate de tener un servicio de MongoDB levantado (local o remoto). Si es local, el comando suele ser:

```bash
mongod
```

```bash
npm run dev
```
Esto ejecute ts-node-dev y reinicie automáticamente cada vez que modifiques un archivo .ts

- Compilar y ejecutar en modo producción

```bash
npm run build
npm start
```
npm run build compila todo el código TypeScript a JavaScript en la carpeta dist/.

npm start ejecuta el servidor desde dist/index.js.

🚀 Cómo usar la API
Una vez que el servidor esté corriendo (por defecto en http://localhost:5000):

- Listar todos los libros

Ruta: GET /api/books

Ejemplo con curl:

```bash
curl -X GET http://localhost:5000/api/books
```
Ejemplo de respuesta:

```jsonc
{
  "success": true,
  "data": [
    {
      "_id": "60f8a72e9c1f8b3f8c123456",
      "title": "Cien años de soledad",
      "author": "Gabriel García Márquez",
      "publishedYear": 1967,
      "genre": "Realismo mágico",
      "available": true,
      "createdAt": "2025-06-05T18:32:10.123Z",
      "updatedAt": "2025-06-05T18:32:10.123Z",
      "__v": 0
    },
    {
      "_id": "60f8a7d08c1f8b3f8c123457",
      "title": "Rayuela",
      "author": "Julio Cortázar",
      "publishedYear": 1963,
      "genre": "Novela",
      "available": false,
      "createdAt": "2025-06-05T18:35:20.456Z",
      "updatedAt": "2025-06-05T18:40:30.789Z",
      "__v": 0
    }
  ]
}
```
- Obtener un libro por ID
Ruta: GET /api/books/:id

Ejemplo (reemplazar <ID> con un ObjectId válido):

```bash
curl -X GET http://localhost:5000/api/books/60f8a72e9c1f8b3f8c123456
```
Respuesta (éxito):

```json
{
  "success": true,
  "data": {
    "_id": "60f8a72e9c1f8b3f8c123456",
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "publishedYear": 1967,
    "genre": "Realismo mágico",
    "available": true,
    "createdAt": "2025-06-05T18:32:10.123Z",
    "updatedAt": "2025-06-05T18:32:10.123Z",
    "__v": 0
  }
}
```

Respuesta (no encontrado):
```jsonc
{
  "success": false,
  "message": "Libro no encontrado"
}
```

- Crear un nuevo libro

Ruta: POST /api/books

Body (JSON):
```json
{
  "title": "El Aleph",
  "author": "Jorge Luis Borges",
  "publishedYear": 1949,
  "genre": "Cuentos",
  "available": true
}
```
Ejemplo con curl:

```bash
curl -X POST http://localhost:5000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "El Aleph",
    "author": "Jorge Luis Borges",
    "publishedYear": 1949,
    "genre": "Cuentos",
    "available": true
  }'
  ```
Respuesta (éxito):

```json
{
  "success": true,
  "data": {
    "_id": "60f8b12d9a6b3c4d5e678901",
    "title": "El Aleph",
    "author": "Jorge Luis Borges",
    "publishedYear": 1949,
    "genre": "Cuentos",
    "available": true,
    "createdAt": "2025-06-05T19:00:00.000Z",
    "updatedAt": "2025-06-05T19:00:00.000Z",
    "__v": 0
  },
  "message": "Libro creado exitosamente"
}
```
Respuesta (título duplicado o datos inválidos):

```json
{
  "success": false,
  "message": "El título ya está registrado"
}
```
- Actualizar un libro existente

Ruta: PATCH /api/books/:id

Body (JSON): Ejemplo para cambiar solo la disponibilidad:

```json
{
  "available": false
}
```
Ejemplo con curl:

```bash
curl -X PATCH http://localhost:5000/api/books/60f8a72e9c1f8b3f8c123456 \
  -H "Content-Type: application/json" \
  -d '{
    "available": false
  }
```

Respuesta (éxito):

```json
{
  "success": true,
  "data": {
    "_id": "60f8a72e9c1f8b3f8c123456",
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "publishedYear": 1967,
    "genre": "Realismo mágico",
    "available": false,
    "createdAt": "2025-06-05T18:32:10.123Z",
    "updatedAt": "2025-06-05T19:05:00.000Z",
    "__v": 0
  },
  "message": "Libro editado con éxito"
}
```

Respuesta (no encontrado):

```json
{
  "success": false,
  "message": "Libro no encontrado"
}
```

- Eliminar un libro

Ruta: DELETE /api/books/:id

Ejemplo con curl:

```bash
curl -X DELETE http://localhost:5000/api/books/60f8a72e9c1f8b3f8c123456
```
Respuesta (éxito):

```json
{
  "success": true,
  "data": {
    "_id": "60f8a72e9c1f8b3f8c123456",
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "publishedYear": 1967,
    "genre": "Realismo mágico",
    "available": false,
    "createdAt": "2025-06-05T18:32:10.123Z",
    "updatedAt": "2025-06-05T19:05:00.000Z",
    "__v": 0
  },
  "message": "Libro eliminado exitosamente"
}
```
Respuesta (no encontrado):

```json
{
  "success": false,
  "message": "Libro no encontrado"
}
```
📦 Scripts disponibles
En el archivo package.json encontrarás los siguientes scripts:

```json
{
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

npm run dev

Inicia el servidor en modo desarrollo con recarga automática (ts-node-dev). Usa los archivos TypeScript directamente (no requiere compilación previa).

npm run build

Compila todo el proyecto TypeScript a JavaScript en la carpeta dist/.

npm start

Ejecuta el servidor con el código compilado (en dist/index.js). Úsalo luego de npm run build.

🔧 Configuración de variables de entorno
Copia .env.example a .env y completa las variables según tu entorno:

```ini
PORT=5000
MONGODB_URI=mongodb://localhost:27017/biblioteca
PORT: Puerto donde correrá el servidor (por defecto 5000).
MONGODB_URI: URL de conexión a MongoDB (local o en nube).
```
🧩 Buenas prácticas y notas

Patrón MVC

Modelos: se definen en src/models/ usando Mongoose y TypeScript.

Controladores: la lógica de cada ruta está en src/controllers/booksControllers.ts.

Rutas: la definición de endpoints está en src/routes/booksRoutes.ts.

Config: src/config/db.ts (conexión a MongoDB) y src/config/env.ts

Tipado fuerte (TypeScript)

Se usan interfaces (src/interfaces/IBook.ts y src/interfaces/ApiRes.ts) para tipar datos y estandarizar respuestas.

Los controladores retornan Promise<void> y construyen objetos con ApiRes<T> para enviar por res.json().

Manejo de errores y códigos HTTP

Se usan try/catch en cada controlador.

Si la operación es exitosa, devuelve HTTP 200 (o 201 al crear).

Si no se encuentra el recurso, devuelve HTTP 404.

Si ocurre un error interno o de validación, devuelve HTTP 400/500 según corresponda.

Commit constantes
Se recomienda realizar al menos 10 commits significativos, reflejando cada etapa:

Inicialización del proyecto

Configuración de TypeScript y Express

Conexión a MongoDB

Modelo Mongoose Book

Interfaz IBook y ApiRes

Controladores CRUD

Rutas REST

Archivos de entorno y .gitignore

Scripts en package.json

Pruebas con Postman 