import dotenv from 'dotenv';

dotenv.config();

const config = {
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PORT: process.env.MYSQL_PORT,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
};

export default config;
