import {Router} from 'express';
import {UserController} from '../controller/user';
import {UserUseCase} from '../../application/userUseCases';
import { MongoRepository } from '../Repository/userRepository';
import { validateResult } from '../helpers/validateHelper';


// Dependecies Injection
const mongoRepository = new MongoRepository();
const userUseCase = new UserUseCase(mongoRepository);
const userController = new UserController(userUseCase);

const router = Router();

router.get('/',userController.getAllUser);
router.post('/register',validateResult,userController.registerUser);
router.delete('/delete/:id',userController.deleteUserById);
router.put('/update/:id',validateResult,userController.updateUserById);
router.post('/login',validateResult,userController.loginUser);
router.get('/:id',userController.getUserById);




export default router;
