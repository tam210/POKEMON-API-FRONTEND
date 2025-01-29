# Usa la imagen base de Node.js
FROM node:18 as builder

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json
COPY package.json package-lock.json ./

# Instalar las dependencias necesarias
RUN npm install

# Copiar todo el contenido del frontend al contenedor
COPY . .

# Realizar el build de Next.js
RUN npm run build

# Crear la imagen de producción
FROM node:18 as production

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios para la producción
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Instalar dependencias en modo producción
RUN npm install --production

# Exponer el puerto 3000 para la aplicación Next.js
EXPOSE 3000

# Comando para arrancar la aplicación Next.js en producción
CMD ["npm", "start"]