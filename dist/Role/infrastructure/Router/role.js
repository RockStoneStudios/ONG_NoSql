"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_1 = require("../controller/role");
const roleRepository_1 = require("../Repository/roleRepository");
const roleUseCase_1 = require("../../application/roleUseCase");
const validateHelpers_1 = require("../helpers/validateHelpers");
const router = (0, express_1.Router)();
//Dependecies Injection
const mongoRepository = new roleRepository_1.MongoRepository();
const roleUseCase = new roleUseCase_1.RoleUseCase(mongoRepository);
const roleController = new role_1.RoleController(roleUseCase);
router.get('/', roleController.getAllRoles);
router.post('/create', validateHelpers_1.validateResult, roleController.createRole);
router.delete('/delete/:id', roleController.deleteRoleById);
router.put('/update/:id', validateHelpers_1.validateResult, roleController.updateRoleById);
router.get('/:id', roleController.getRoleById);
exports.default = router;
//# sourceMappingURL=role.js.map