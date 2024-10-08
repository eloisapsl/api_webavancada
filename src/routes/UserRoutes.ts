import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserMiddleware from '../middlewares/UserMiddleware';

const UserRouter = Router();

//Listar usuários
UserRouter.get("/users", UserController.getAllUsers);

//Inserir usuários
UserRouter.post("/users/create",UserMiddleware.analyseToken, UserController.createUser);

//Atualizar usuários
UserRouter.put("/user/update/:id", UserController.updateUser);

//Deletar usuários
UserRouter.delete("/user/delete/:id", UserController.deleteUser);

export default UserRouter;