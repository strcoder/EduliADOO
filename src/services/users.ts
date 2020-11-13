import MongoLib from "../lib/mongo";
import bcrypt from 'bcrypt';

class UsersServices {
  collection: string;
  mongoDB: MongoLib;

  constructor(collection: string = 'auth') {
    this.collection = collection;
    this.mongoDB = new MongoLib();
  }

  async getUsers({ tags }: any) {
    const query = tags && { tags: { $in: tags } }
    const users = await this.mongoDB.getAll(this.collection, query);
    return users || [];
  }

  async getUserByNickname({ nickname }: any) {
    const [ user ] = await this.mongoDB.getAll(this.collection, { nickname });
    return user;
  }

  async getUserByEmail({ email }: any) {
    const [ user ] = await this.mongoDB.getAll(this.collection, { email });
    return user;
  }

  async verifyUserExist({ nickname, email }: any) {
    const [ userByNickname ] = await this.mongoDB.getAll(this.collection, { nickname });
    if (userByNickname) {
      return userByNickname;
    }
    const [ userByEmail ] = await this.mongoDB.getAll(this.collection, { email });
    return userByEmail;
  }

  async createUser({ user }: any) {
    const { password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    const createUserId = await this.mongoDB.create(this.collection, user);

    return createUserId;
  }

  // async updateUser({ email, user } = {}) {
  //   const updatedUserId = await this.mongoDB.update(this.collection, email, user);
  //   return updatedUserId;
  // }

  // async deleteUser({ userId }) {
  //   const deletedUserId = await this.mongoDB.delete(this.collection, userId);
  //   return deletedUserId;
  // }
}

export default UsersServices;