import MongoLib from "../lib/mongo";

class Services {
  collection: string;
  mongoDB: MongoLib;

  constructor(collection: any) {
    this.collection = collection;
    this.mongoDB = new MongoLib();
  }

  async getList({ tags }: any) {
    const query = tags && { tags: { $in: tags } }
    const list = await this.mongoDB.getAll(this.collection, query);
    return list || [];
  }

  async getOne({ objectId }: any) {
    const object = await this.mongoDB.get(this.collection, objectId);
    return object || {};
  }

  async createOne({ object }: any) {
    const createObjectId = await this.mongoDB.create(this.collection, object);
    return createObjectId;
  }

  async updateOne({ objectId = '', object = {} }) {
    const updatedObjectId = await this.mongoDB.update(this.collection, objectId, object);
    return updatedObjectId;
  }

  async updateObjectWithLists({ objectId = '', object = {} }) {
    const updatedObjectId = await this.mongoDB.updateList(this.collection, objectId, object);
    return updatedObjectId;
  }

  async deleteItem({ objectId, query }: any) {
    const deleteItemId = await this.mongoDB.deleteItem(this.collection, objectId, query);
    return deleteItemId;
  }

  async deleteOne({ objectId }: any) {
    const deletedObjectId = await this.mongoDB.delete(this.collection, objectId);
    return deletedObjectId;
  }
}

export default Services;