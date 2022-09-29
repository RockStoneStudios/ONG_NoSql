"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organizationRepository_1 = require("../Repository/organizationRepository");
const organization_1 = require("../controller/organization");
const organizationUseCase_1 = require("../../application/organizationUseCase");
const router = (0, express_1.Router)();
// Dependecies Injection
const mongoRepository = new organizationRepository_1.MongoRepository();
const organizationUseCase = new organizationUseCase_1.OrganizationUseCase(mongoRepository);
const organizationController = new organization_1.OrganizationController(organizationUseCase);
router.get('/', organizationController.getAllOrganizations);
router.post('/create', organizationController.createOrganization);
router.delete('/delete/:id', organizationController.deleteOrganization);
router.put('/update/:id', organizationController.updateOrganization);
router.get('/:id', organizationController.getOrganizationById);
exports.default = router;
//# sourceMappingURL=organization.js.map