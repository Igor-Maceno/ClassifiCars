import express, { Request, Response } from 'express';
import userController from '../controller/UserController';

const router = express.Router();

// Rota para criar um novo usuário
router.post('/', userController.createUser, (req: Request, res: Response) => {
  // Lógica para criar um novo usuário
});

// Rota para obter detalhes de um usuário
router.get('/:id', userController.getUser, (req: Request, res: Response) => {
  // Lógica para obter detalhes de um usuário pelo ID
});

// Rota para atualizar um usuário
router.put('/:id', userController.updateUser, (req: Request, res: Response) => {
  // Lógica para atualizar um usuário pelo ID
});

// Rota para excluir um usuário
router.delete('/:id', userController.deleteUser, (req: Request, res: Response) => {
  // Lógica para excluir um usuário pelo ID
});

export default router;
