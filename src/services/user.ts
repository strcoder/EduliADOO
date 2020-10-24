import { array } from '@hapi/joi';
import MongoLib from '../lib/mongo';

class UserServices {
  collection: string;
  mongoDB: MongoLib;
  constructor(collection: string = 'user') {
    this.collection = collection;
    this.mongoDB = new MongoLib();
  }

  async getUsers({ tags }: any) {
    const query = tags && { email: tags };
    const users = await this.mongoDB.getAll(this.collection, query);
    return users || [];
  }

  async getOneUser({ id }: any) {
    const user = await this.mongoDB.getOne(this.collection, id);
    return user || {};
  }

  async createUser({ user }: any) {
    const data = await this.mongoDB.create(this.collection, user)
    return data;
  }

  async updateUser({ id, user }: any){
    const updateUserId = await this.mongoDB.update(this.collection, id, user);
    return updateUserId;
  }

  async deleteUser({ id }: any){
    const deleteUser = await this.mongoDB.delete(this.collection, id)
    return deleteUser;
  }
}

export default UserServices;
