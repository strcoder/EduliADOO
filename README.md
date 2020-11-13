# EduliADOO
Backend del proyecto creado con NodeJS y ExpressJS

## Requerimientos
Node 14.6.0 https://nodejs.org/es/
####
Npm 6.14.6
####
Git https://git-scm.com/

## Clonar o descargar repositorio
### Clonar con SSH
En terminal o git bash escribir el siguinte comando:
###
git clone git@github.com:strcoder/EduliADOO.git
### Clonar con HTTPS
En terminal o git bash escribir el siguinte comando:
###
git clone https://github.com/strcoder/EduliADOO.git
### Descargar
Dar click en el boton codigo y descargar el zip

## Instalar dependencias
Ya que el repositorio haya clonado o descargado correctamente en terminal debera posicionarse en la carpeta raíz del proyecto
Ya posicionado correectamente en la raíz del proyecto escribir el siguiente comando
###
npm install && npm install -D

## Variables de entorno 

Ya que las dependencias sean instaladas correctamente debera asignar las variables de entorno para que el proyecto funcione correctamente
Las variables de entorno estan en el archivo 

### .env.example

Lo que se debera hacer es crear un nuevo archivo llamado .env en el cual debera poner las variables que se encuentre en el .env.example

### .env

ESto debera ir dentro del archivo .env

###
// CONFIG
PORT=8080
CORS=*

// MONGO
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=

## Scripts diponibles

Comandos para correr el proyecto en terminal
Una vez terminadas las configuraciones podra correr los siguientes scripts para correr el proyecto

### npm run dev

Correra el programa con node en el modo desarrollo

### npm run build

Script para que nextjs genere el build de nuestro proyecto

### npm run start

Correra el programa con node en el modo produccion
