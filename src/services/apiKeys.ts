import MongoLib from '../lib/mongo';

class ApiKeyServices {
  collection: string;
  mongoDB: MongoLib;
  constructor() {
    this.collection = 'api-keys';
    this.mongoDB = new MongoLib();
  }

  async getApiKeys({ token }: any) {
    const [ apiKey ] = await this.mongoDB.getAll(this.collection, { token });
    return apiKey;
  }
}

export default ApiKeyServices;