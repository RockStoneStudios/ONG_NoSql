"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryRepository_1 = require("../Repository/categoryRepository");
const category_1 = require("../controller/category");
const categoryUseCase_1 = require("../../application/categoryUseCase");
const router = (0, express_1.Router)();
// Dependecies Injection
const mongoRepository = new categoryRepository_1.MongoRepository();
const categoryUsecase = new categoryUseCase_1.CategoryUseCase(mongoRepository);
const categoryController = new category_1.CategoryController(categoryUsecase);
router.get('/', categoryController.getAllCategories);
router.post('/create', categoryController.createCategory);
router.delete('/delete/:id', categoryController.deleteCategory);
router.put('/update/:id', categoryController.updateCategory);
router.get('/:id', categoryController.getCategoryById);
exports.default = router;
//# sourceMappingURL=category.js.map