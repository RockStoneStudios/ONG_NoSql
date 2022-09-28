"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const news_1 = require("../controller/news");
const newsRepository_1 = require("../Repository/newsRepository");
const newsUseCase_1 = require("../../application/newsUseCase");
const express_1 = require("express");
const router = (0, express_1.Router)();
// dependency injection
const mongoRepository = new newsRepository_1.MongoRepository();
const newsUsecase = new newsUseCase_1.NewsUseCase(mongoRepository);
const newsController = new news_1.NewsController(newsUsecase);
router.get('/', newsController.getAllNews);
router.post('/create', newsController.createNews);
router.delete('/delete/:id', newsController.deleteNews);
router.put('/update/:id', newsController.updateNews);
router.get('/:id', newsController.getNewsById);
exports.default = router;
//# sourceMappingURL=news.js.map