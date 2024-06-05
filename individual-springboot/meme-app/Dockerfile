# Usar una imagen base de OpenJDK 21
FROM openjdk:21-jdk-slim

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo JAR de la aplicación
COPY target/*.jar app.jar

# Exponer el puerto en el que la aplicación Spring Boot se ejecutará
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["java", "-jar", "app.jar"]