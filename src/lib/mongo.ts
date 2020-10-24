import { MongoClient, ObjectId } from 'mongodb';
import { config } from './../config';

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  client: MongoClient;
  dbName: string;
  static connection: any;
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    this.dbName = DB_NAME;
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((error) => {
          if (error) {
            reject(error);
            return;
          }

          console.log('Connected successfuly to mongo');

          resolve(this.client.db(this.dbName));
        });
      });
    }

    return MongoLib.connection;
  }

  getAll(collection: string, query: any) {
    return this.connect().then((db: any) => {
      return db.collection(collection).find(query).toArray();
    });
  }

  getOne(collection: string, id: string) {
    return this.connect().then((db: any) => {
      return db.collection(collection).findOne({ _id: new ObjectId(id) })
    });
  }

  create(collection: string, data: object) {
    return this.connect().then((db: any) => {
      return db.collection(collection).insertOne(data);
    }).then((result: any) => result.insertedId);
  }

  update(collection: string, id: string, data: object){
    return this.connect().then((db: any) =>{
      return db.collection(collection).updateOne({ _id: new ObjectId(id) }, { $set: data }, { $upsert: true });
    }).then((result: any) => result.upsertedId || id);
  }

  delete(collection: string, id: string){
    return this.connect().then((db: any) =>{
      return db.collection(collection).deleteOne({ _id: new ObjectId(id) })
    }).then(() => id);
  }
}

export default MongoLib;
