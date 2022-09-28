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
exports.UserController = void 0;
const EncryptPassword_1 = require("../utils/EncryptPassword");
const ComparePassword_1 = require("../utils/ComparePassword");
const signature_1 = require("../middlewares/signature");
class UserController {
    constructor(userCase) {
        this.userCase = userCase;
        this.getAllUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('hello');
                const users = yield this.userCase.getAllUser();
                console.log(users);
                return res.status(200).json(users);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.registerUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const newUser = req.body;
            const user = yield this.userCase.getUserByEmail(newUser.email);
            if (user)
                return res.status(400).json({ message: "This User has been already Exist with this Email!!" });
            newUser.password = yield (0, EncryptPassword_1.encryptPassword)(newUser.password);
            try {
                const user = yield this.userCase.registerUser(newUser);
                return res.status(200).json({ message: `The User ${newUser.firstName} has been created with Successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.getUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            try {
                const user = yield this.userCase.getUserById(req.params.id);
                return res.status(200).json(user);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.updateUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userUpdate = yield this.userCase.updatedUser(req.params.id, req.body);
                return res.status(200).json(userUpdate);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.deleteUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userDelete = yield this.userCase.deletedUser(req.params.id);
                return res.status(200).json(userDelete);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.loginUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log('Hello');
            try {
                const saveUser = yield this.userCase.getUserByEmail(req.body.email);
                if (!saveUser)
                    return res.status(404).json({ messsage: "User not found" });
                const comparePassword = yield (0, ComparePassword_1.passwordCompare)(req.body.password, saveUser.password);
                if (!comparePassword)
                    return res.status(401).json({ message: "Passwords not match" });
                const payload = { id: saveUser.id };
                const token = yield (0, signature_1.generateSignature)(payload);
                return res.status(201).json({ message: 'Login with Successful', token });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.js.map