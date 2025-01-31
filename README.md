# Pokémon TCG API y Frontend

ste proyecto es una aplicación Fullstack que permite listar y visualizar sets y cartas del juego Pokémon TCG. El backend está construido con **Express (Node.js)** y se conecta a una base de datos **PostgreSQL**. El frontend está desarrollado con **Next.js**, utiliza **Tailwind CSS** para los estilos y **Animations.css** para animaciones de carrusel. Además, el proyecto está configurado con **Docker Compose** para facilitar el despliegue de los servicios.

---
## Funcionalidades

### API REST con PostgreSQL
Endpoints desarrollados:
- /sets
- /sets/:id/cards
- /cards
- /cards:id
### Frontend con Nextjs y Tailwindcss
- Listar los sets disponibles.
- Mostrar las cartas correspondientes a cada set.
- Visualizar información detallada de una carta en una vista individual.

### Infraestructura
- Docker para la configuración del entorno de desarrollo, incluyendo la base de datos, API y frontend.


## Requisitos

- **Backend**:
  - Node.js (v18 o superior)
  - Express
  - PostgreSQL (v17 o superior)
  - Sequelize como ORM
- **Frontend**:
  - Next.js (v13 o superior)
  - Tailwind CSS
  - Animations.css
- **Infraestructura**:
  - Docker
  - Docker Compose

---

## Configuración del Entorno

### 1. **Clonar el Repositorio**

```bash
git clone https://github.com/tam210/POKEMON-API-FRONTEND.git
cd POKEMON-API-FRONTEND
```
---
### 2. Instrucciones de Ejecución

#### Ejecutar proyecto

#### Opción 1: Ejecutar con Docker Compose
1. Se cambia en las variables del .env el valor por defecto "localhost". 
    En el .env del backend se establece:
    ```bash
    NEXT_PUBLIC_MODE=frontend
    ```
    Y en el .env del frontend y en el de la carpeta raíz se establece:
    ```bash
    NEXT_PUBLIC_API_URL=http://backend:3001
    ```
   
2. Construir y Levantar los Servicios:
    ```bash
    docker-compose up --build
    ```
    ---

##### Limitaciones
- Fetch del frontend al backend limitada: No se cargan las imágenes correctamente debido a problemas con la optimización en el renderizado de Next.js [ :( ]

#### Opción 2: Ejecutar localmente

1. Se cambia en las variables .env POR el valor "localhost". 
    .env del backend:
    ```bash
    NEXT_PUBLIC_MODE=localhost
    ```
    .env del frontend y carpeta raíz:
    ```bash
    NEXT_PUBLIC_API_URL=http://localhost:3001
    ```

## Acceder a rutas
Luego de la ejecución, local o por contenedores, levantará los siguientes servicios:

- PostgreSQL: Base de datos en http://localhost:5432.

    - Backend: API en http://localhost:3001.
        1. http://localhost:3001/api/sets para obtener todos los sets
        2. http://localhost:3001/api/sets/:id/cards para obtener las cartas de un set seleccionado
        3. http://localhost:3001/api/cards para obtener todas cartas
        4. http://localhost:3001/api/cards/:id para obtener la información especíica de una carta

    - Frontend: Aplicación en http://localhost:3000.

    Acceder a la Aplicación:

    - Abrir el navegador y visitar http://localhost:3000.