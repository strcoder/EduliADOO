import express from 'express';
import Auth from './models/Auth';
import Profesor from './models/Profesor';
import User from './models/User';

const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).json({
    data: 'Corriendo',
  });
});

const User1 = new User('1','Armando','160299','12345','armando@hotmail');
User1.Registro()
console.log(`el usuario 1 es ${User1.getName()}, ${User1.getId()}, ${User1.getPassword()}, ${User1.getdateOfBirth()}`)
const Profesor1 = new Profesor('1','Armando','160299','12345','armando@hotmail');
console.log(`el PROFESOR 1 es ${Profesor1.getName()}, ${Profesor1.getId()}, ${Profesor1.getPassword()}, ${Profesor1.getdateOfBirth()}`)

const Auth1 = new Auth(Profesor1.getEmail(), Profesor1.getPassword());

let sesion = Auth1.Login();

if (sesion) {
  console.log('Bienvenido');
} else {
  console.log('Error al iniciar sesion');
}

Auth1.register();
sesion = Auth1.Login();

if (sesion) {
  console.log('Bienvenido');
} else {
  console.log('Error al iniciar sesion');
}


app.listen(8000 ,() => {
  console.log(`\nListen in http://localhost:8000`);
})