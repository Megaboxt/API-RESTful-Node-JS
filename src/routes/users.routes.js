import { Router } from "express";
import { 
    createUser, 
    deleteUser, 
    getAllUsers, 
    getUserById, 
    updateUser 
} from "../controllers/users.controller.js";
import { authentication } from "../middlewares/auth.middleware.js";

const router = Router();


router.get('/users', authentication, getAllUsers);

router.get('/users/:id', authentication, getUserById);

router.post('/users/create', createUser);

router.put('/users/update/:id', authentication, updateUser);

router.delete('/users/:id', authentication, deleteUser);



export default router;