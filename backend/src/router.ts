import { Request, Response, Router } from "express";
import userRoutes from './routes/UserRoutes';

const router:Router = Router();

router.get('/', (req: Request, res: Response)=>{
    res.json({
        message: "API rodando!"
    })
});
// Rotas de usuário
router.use('/users', userRoutes);

export { router };