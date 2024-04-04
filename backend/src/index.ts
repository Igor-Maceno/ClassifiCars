import {App} from './app';
import { connectDB, getConnection } from './db/db';


// Conectar ao banco de dados
connectDB();

new App().server.listen(5000);