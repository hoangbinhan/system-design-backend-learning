import config from '@/config/env';
import mysql from 'mysql';
import { createUsersTable } from './tables/user';

const connectMySqlDb = () => {
  const connection = mysql.createConnection({
    host: config.MYSQL_HOST,
    user: config.MYSQL_USER,
    port: +(config.MYSQL_PORT || 3306),
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE,
  });

  connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    console.log('connected as id ' + connection.threadId);

    connection.query(createUsersTable, (err) => {
      if (err) {
        console.error('Error creating users table:', err.stack);
        return;
      }
      console.log('Users table created successfully');
    });
  });
};

export { connectMySqlDb };
