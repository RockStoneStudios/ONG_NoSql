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
exports.RoleUseCase = void 0;
const roleValue_1 = require("../domain/roleValue");
class RoleUseCase {
    constructor(useCase) {
        this.useCase = useCase;
        this.getAllRole = () => __awaiter(this, void 0, void 0, function* () {
            const roles = yield this.useCase.getAllRole();
            return roles;
        });
        this.createRole = ({ name, description, users }) => __awaiter(this, void 0, void 0, function* () {
            const newRole = new roleValue_1.RoleValue({ name, description, users });
            const role = yield this.useCase.createRole(newRole);
            return role;
        });
        this.getRoleById = (id) => __awaiter(this, void 0, void 0, function* () {
            const role = yield this.useCase.getRoleById(id);
            return role;
        });
        this.deleteRole = (id) => __awaiter(this, void 0, void 0, function* () {
            const role = yield this.useCase.deleteRole(id);
            return role;
        });
        this.updateRole = (id, { name, description, users }) => __awaiter(this, void 0, void 0, function* () {
            const newRole = new roleValue_1.RoleValue({ name, description, users });
            const update_role = yield this.useCase.updatedRole(id, newRole);
            return update_role;
        });
    }
}
exports.RoleUseCase = RoleUseCase;
//# sourceMappingURL=roleUseCase.js.map