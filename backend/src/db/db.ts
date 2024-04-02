// db.ts
import mysql, { Connection } from 'mysql';
import { dbConfig } from './dbConfig';

let connection: Connection;

export const connectDB = (): void => {
  connection = mysql.createConnection(dbConfig);
  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      throw err;
    }
    console.log('Conexão com o banco de dados estabelecida');
  });
};

export const getConnection = (): Connection => {
  if (!connection) {
    throw new Error('Conexão com o banco de dados não estabelecida');
  }
  return connection;
};
