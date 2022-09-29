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
exports.OrganizationController = void 0;
class OrganizationController {
    constructor(organizationCase) {
        this.organizationCase = organizationCase;
        this.getAllOrganizations = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const organizations = yield this.organizationCase.getAllOrganization();
                return res.status(200).json(organizations);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.createOrganization = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const organization = yield this.organizationCase.createOrganization(req.body);
                return res.status(201).json({ message: `the Organization ${organization === null || organization === void 0 ? void 0 : organization.name} has been Created Successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.getOrganizationById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const organization = yield this.organizationCase.getOrganizationById(req.params.id);
                return res.status(200).json(organization);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.deleteOrganization = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const organization = yield this.organizationCase.deleteOrganization(req.params.id);
                return res.status(200).json({ message: `The Organization ${organization === null || organization === void 0 ? void 0 : organization.name} has been deleted Successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.updateOrganization = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const organization = yield this.organizationCase.updateOrganization(req.params.id, req.body);
                return res.status(200).json({ message: `The Organization ${organization === null || organization === void 0 ? void 0 : organization.name} has been updated Successful` });
            }
            catch (error) {
                return res.status(200).json(error);
            }
        });
    }
}
exports.OrganizationController = OrganizationController;
//# sourceMappingURL=organization.js.map