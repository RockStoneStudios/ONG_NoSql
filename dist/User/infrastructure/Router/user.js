"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controller/user");
const userUseCases_1 = require("../../application/userUseCases");
const userRepository_1 = require("../Repository/userRepository");
const validateHelper_1 = require("../helpers/validateHelper");
// Dependecies Injection
const mongoRepository = new userRepository_1.MongoRepository();
const userUseCase = new userUseCases_1.UserUseCase(mongoRepository);
const userController = new user_1.UserController(userUseCase);
const router = (0, express_1.Router)();
router.get('/', userController.getAllUser);
router.post('/register', validateHelper_1.validateResult, userController.registerUser);
router.delete('/delete/:id', userController.deleteUserById);
router.put('/update/:id', validateHelper_1.validateResult, userController.updateUserById);
router.post('/login', validateHelper_1.validateResult, userController.loginUser);
router.get('/:id', userController.getUserById);
exports.default = router;
//# sourceMappingURL=user.js.map