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
const role_1 = __importDefault(require("../model/role"));
class MongoRepository {
    getAllRole() {
        return __awaiter(this, void 0, void 0, function* () {
            const roles = yield role_1.default.find({}).populate({ path: 'users' });
            console.log(roles);
            return roles;
        });
    }
    createRole(role) {
        return __awaiter(this, void 0, void 0, function* () {
            const rol = new role_1.default(role);
            yield rol.save();
            return rol;
        });
    }
    getRoleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield role_1.default.findById(id);
            return role;
        });
    }
    deleteRole(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield role_1.default.findByIdAndDelete(id);
            return role;
        });
    }
    updatedRole(id, role) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateRole = yield role_1.default.findByIdAndUpdate(id, role, { new: true });
            return updateRole;
        });
    }
}
exports.MongoRepository = MongoRepository;
//# sourceMappingURL=roleRepository.js.map