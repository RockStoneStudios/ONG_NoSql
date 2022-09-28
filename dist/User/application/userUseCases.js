"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCase = void 0;
const userValue_1 = require("../domain/userValue");
class UserUseCase {
    constructor(useCase) {
        this.useCase = useCase;
        this.getAllUser = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.useCase.getAllUser();
            return users;
        });
        this.registerUser = ({ firstName, lastName, age, email, password, photo, role, is_deleted }) => __awaiter(this, void 0, void 0, function* () {
            const newUserValue = new userValue_1.UserValue({ firstName, lastName, age, email, password, photo, role, is_deleted });
            const newUser = yield this.useCase.registerUser(newUserValue);
            return newUser;
        });
        this.getUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.useCase.getUserById(id);
            return user;
        });
        this.updatedUser = (idUser, { firstName, lastName, age, email, password, photo, role, is_deleted }) => __awaiter(this, void 0, void 0, function* () {
            const newUserValue = new userValue_1.UserValue({ firstName, lastName, age, email, password, photo, role, is_deleted });
            const updatedUser = yield this.useCase.updatedUser(idUser, newUserValue);
            return updatedUser;
        });
        this.deletedUser = (id) => __awaiter(this, void 0, void 0, function* () {
            const userDeleted = yield this.useCase.deletedUser(id);
            return userDeleted;
        });
        this.getUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            const userByEmail = yield this.useCase.getUserByEmail(email);
            return userByEmail;
        });
        this.loginUser = (email, password) => __awaiter(this, void 0, void 0, function* () {
            const userLlogin = yield this.useCase.loginUser(email, password);
        });
    }
}
exports.UserUseCase = UserUseCase;
//# sourceMappingURL=userUseCases.js.map