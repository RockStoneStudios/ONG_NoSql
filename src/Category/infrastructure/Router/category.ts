import {Router} from 'express';
import { MongoRepository } from '../Repository/categoryRepository';
import {CategoryController} from '../controller/category';
import {CategoryUseCase} from '../../application/categoryUseCase';


const router = Router();

// Dependecies Injection

const mongoRepository = new MongoRepository();
const categoryUsecase = new CategoryUseCase(mongoRepository);
const categoryController = new CategoryController(categoryUsecase);

router.get('/',categoryController.getAllCategories);
router.post('/create',categoryController.createCategory);
router.delete('/delete/:id',categoryController.deleteCategory);
router.put('/update/:id',categoryController.updateCategory);
router.get('/:id',categoryController.getCategoryById);





export default router;