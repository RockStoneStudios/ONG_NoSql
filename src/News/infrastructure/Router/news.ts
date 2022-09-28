import {NewsController} from '../controller/news';
import { MongoRepository } from '../Repository/newsRepository';
import { NewsUseCase } from '../../application/newsUseCase';
import {Router} from 'express';


const router = Router();

// dependency injection

const mongoRepository = new MongoRepository();
const newsUsecase = new NewsUseCase(mongoRepository);
const newsController = new NewsController(newsUsecase);

router.get('/',newsController.getAllNews);
router.post('/create',newsController.createNews);
router.delete('/delete/:id',newsController.deleteNews);
router.put('/update/:id',newsController.updateNews);
router.get('/:id',newsController.getNewsById);


export default router;