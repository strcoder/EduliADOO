import 'dotenv/config';

export const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 8080,
  cors: process.env.CORS || '*',
  dbUser: process.env.DB_USER || '',
  dbPassword: process.env.DB_PASSWORD || '',
  dbHost: process.env.DB_HOST || '',
  dbName: process.env.DB_NAME || '',
  apiKeyToken: process.env.API_KEY_TOKEN || '',
  authJwtSecret: process.env.AUTH_JWT_SECRET || '',
}
