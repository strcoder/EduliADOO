// DEBUG=app:* node scripts/mongo/seedApiKeys.js
import chalk from 'chalk';
import crypto from 'crypto';
import MongoLib from '../lib/mongo';
// const debug = require('debug')('app:scripts:api-keys');
import debug from 'debug';
debug('app:scripts:api-keys');

const adminScopes = [
  'signin:auth',
  'signup:auth',
  'read:user',
  'update:user',
  'read:managers',
  'update:managers',
  'read:teachers',
  'update:teachers',
  'read:students',
  'update:students',
  'read:institutes',
  'create:institutes',
  'update:institutes',
  'delete:institutes',
  'read:levels',
  'create:levels',
  'update:levels',
  'delete:levels',
  'read:courses',
  'create:courses',
  'update:courses',
  'delete:courses',
  'read:topics',
  'create:topics',
  'update:topics',
  'delete:topics',
  'read:videos',
  'create:videos',
  'update:videos',
  'delete:videos',
  'read:files',
  'create:files',
  'update:files',
  'delete:files',
];

const managerScopes = [
  'signin:auth',
  'signup:auth',
  'read:institutes',
  'update:institutes',
  'read:levels',
  'create:levels',
  'update:levels',
  'delete:levels',
  'read:tachers',
  'create:tachers',
  'update:tachers',
  'read:students',
  'create:students',
  'update:students',
  'read:courses',
  'read:topics',
  'read:videos',
  'read:files',
];

const teacherScopes = [
  'signin:auth',
  'signup:auth',
  'read:institutes',
  'read:levels',
  'read:courses',
  'create:courses',
  'update:courses',
  'delete:courses',
  'read:teachers',
  'update:teachers',
  'read:topics',
  'create:topics',
  'update:topics',
  'delete:topics',
  'read:videos',
  'create:videos',
  'update:videos',
  'delete:videos',
  'read:files',
  'create:files',
  'update:files',
  'delete:files',
];

const studentScopes = [
  'signin:auth',
  'signup:auth',
  'read:institutes',
  'read:levels',
  'read:courses',
  'read:topics',
  'read:videos',
  'read:files',
  'create:files',
  'update:files',
  'delete:files',
];

const publicScopes = [
  'signin:auth',
  'signup:auth',
  'read:institutes',
];

const apiKeys = [
  {
    name: 'admin',
    token: generateRandomToken(),
    scopes: adminScopes
  },
  {
    name: 'manager',
    token: generateRandomToken(),
    scopes: managerScopes
  },
  {
    name: 'teacher',
    token: generateRandomToken(),
    scopes: teacherScopes
  },
  {
    name: 'student',
    token: generateRandomToken(),
    scopes: studentScopes
  },
  {
    name: 'public',
    token: generateRandomToken(),
    scopes: publicScopes
  },
];

function generateRandomToken() {
  const buffer = crypto.randomBytes(32);
  return buffer.toString('hex');
}

async function seedApiKeys() {
  try {
    const mongoDB = new MongoLib();

    const promises = apiKeys.map(async apiKey => {
      await mongoDB.create('api-keys', apiKey);
    });

    await Promise.all(promises);
    debug(chalk.green(`${promises.length} api keys have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (error) {
    debug(chalk.red(error));
    process.exit(1);
  }
}

seedApiKeys();