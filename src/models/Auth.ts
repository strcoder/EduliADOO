
const AuthList = [
  {
    email: 'pepe@c.com',
    password: 'gsdfgsd4',
  },
  {
    email: 'teo@c.com',
    password: 'dfgdfgdf55',
  },
  {
    email: 'lupe@c.com',
    password: '64dfgh67',
  },
  // {
  //   email: 'armando@hotmail',
  //   password: '12345'
  // }
]

class Auth {
  private email: string;
  private password: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  };
  Login(): boolean {
    let flag: boolean = false;
    AuthList.map((user) => {
      if (this.email === user.email && this.password === user.password) {
        flag = true;
      }
    });
    return flag;
  }
  Logout(): boolean {
    console.log('Cerraste Sesion, Felicidades');
    return false;
  }
  register(): void {
    // let flag: {} ;
    const flag = AuthList.find((user) => this.email === user.email);
    if (flag) {
      console.log('NO Registro correcto');
    } else {
      AuthList.push({
        email: this.email,
        password: this.password,
      })
      console.log('Registro correcto');
    }
  }
}

export default Auth;
