import MongoLib from '../lib/mongo';
import bcrypt from 'bcrypt';

class UserServices {
  collection: string;
  mongoDB: MongoLib;
  constructor(collection: string = 'auth') {
    this.collection = collection;
    this.mongoDB = new MongoLib();
  }

  // async getUsers({ tags }: any) {
  //   const query = tags && { email: tags };
  //   const users = await this.mongoDB.getAll(this.collection, query);
  //   return users || [];
  // }

  async getOneUser({ email }: any) {
    const [user] = await this.mongoDB.getAll(this.collection, { email });
    return user;
  }

  async createUser({ user }: any) {
    const { password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    const data = await this.mongoDB.create(this.collection, user)
    return data;
  }

  async updateUser({ id, user }: any){
    const { password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    const updateUserId = await this.mongoDB.update(this.collection, id, user);
    return updateUserId;
  }

  async deleteUser({ id }: any){
    const deleteUser = await this.mongoDB.delete(this.collection, id)
    return deleteUser;
  }
}

export default UserServices;
