# Usa una imagen base oficial de Node.js
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código del backend
COPY . .

# Exponer el puerto en el que tu backend escucha
EXPOSE 3001

# Comando para iniciar el servidor de backend
CMD ["npm", "start"]
