class User {
  private id: string;
  private name: string;
  private dateOfBirth: string;
  private password: string;
  private email: string;

  constructor (id: string, name: string, dateOfBirth: string, password: string, email: string){
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.password = password;
    this.email = email;
  }
  getId(): string{
      return this.id;
  }
  getPassword(): string{
      return this.password;
  }
  getName():string{
      return this.name;
  }
  getdateOfBirth():string{
    return this.dateOfBirth;
  }
    getEmail():string{
  return this.email;
}
  
  Registro() {
    console.log('ya me registre')
  }

  IniciarSesion(){
    console.log('ya inicie sesion :)')
  }
}

export default User;
