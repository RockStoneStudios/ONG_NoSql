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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRepository = void 0;
const user_1 = __importDefault(require("../model/user"));
const role_1 = __importDefault(require("../../../Role/infrastructure/model/role"));
class MongoRepository {
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_1.default.find().populate('roles').orFail();
            console.log(users);
            return users;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findById(id);
            return user;
        });
    }
    registerUser(user) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new user_1.default(user);
            const role = yield role_1.default.findById(newUser.role);
            newUser.role = role === null || role === void 0 ? void 0 : role._id;
            yield newUser.save();
            (_a = role === null || role === void 0 ? void 0 : role.users) === null || _a === void 0 ? void 0 : _a.push(newUser._id);
            yield (role === null || role === void 0 ? void 0 : role.save());
            return newUser;
        });
    }
    updatedUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield user_1.default.findByIdAndUpdate(id, user, { new: true });
            return updatedUser;
        });
    }
    deletedUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findById(id);
            if (user) {
                user.is_deleted = true;
                yield user.save();
            }
            return user;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findOne({ email: email });
            return user;
        });
    }
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findOne({ email: email });
            return user;
        });
    }
}
exports.MongoRepository = MongoRepository;
//# sourceMappingURL=userRepository.js.map