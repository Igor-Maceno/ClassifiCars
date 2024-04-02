import { Request, Response } from 'express';
import User from '../model/user.model';
import { getConnection } from '../db/db';

class UserController {
  public async createUser(req: Request, res: Response): Promise<void> {
    try {
        const { name, email, senha } = req.body;
        const newUser = new User(name, email, senha);
        const connection = getConnection();
        await connection.query('INSERT INTO user (name, email, senha) VALUES (?, ?, ?)', [name, email, senha]);
        res.status(201).json(newUser);
      } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
      }
  }

  public getUser(req: Request, res: Response): void {
    // Lógica para obter detalhes de um usuário pelo ID
  }

  public updateUser(req: Request, res: Response): void {
    // Lógica para atualizar um usuário pelo ID
  }

  public deleteUser(req: Request, res: Response): void {
    // Lógica para excluir um usuário pelo ID
  }
}

export default new UserController();
