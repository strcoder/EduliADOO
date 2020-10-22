import User from './User'

class Profesor extends User {
  constructor(id: string, name: string, dateOfBirth: string, password: string, email: string){
    super(id, name, dateOfBirth, password, email);
  };
}

export default Profesor;
