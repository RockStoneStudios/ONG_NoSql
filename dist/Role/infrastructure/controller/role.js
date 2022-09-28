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
exports.RoleController = void 0;
class RoleController {
    constructor(roleCase) {
        this.roleCase = roleCase;
        this.getAllRoles = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const roles = yield this.roleCase.getAllRole();
                return res.status(200).json(roles);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.createRole = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newRole = yield this.roleCase.createRole(req.body);
                return res.status(201).json(newRole);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.getRoleById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const role = yield this.roleCase.getRoleById(req.params.id);
                return res.status(200).json(role);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.deleteRoleById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const role = yield this.roleCase.deleteRole(req.params.id);
                return res.status(200).json({ message: `The rol ${role === null || role === void 0 ? void 0 : role.name} has been deleted with successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.updateRoleById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const role = yield this.roleCase.updateRole(req.params.id, req.body);
                return res.status(200).json(role);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.RoleController = RoleController;
//# sourceMappingURL=role.js.map