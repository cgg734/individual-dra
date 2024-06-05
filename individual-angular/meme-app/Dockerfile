# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente de la aplicación
COPY . .

# Exponer el puerto en el que Angular servirá la aplicación
EXPOSE 4200

# Comando para iniciar la aplicación Angular en modo desarrollo
CMD ["npm", "start"]
