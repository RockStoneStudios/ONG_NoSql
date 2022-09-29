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
exports.OrganizationUseCase = void 0;
const organizationValues_1 = require("../domain/organizationValues");
class OrganizationUseCase {
    constructor(useCase) {
        this.useCase = useCase;
        this.getAllOrganization = () => __awaiter(this, void 0, void 0, function* () {
            const organizations = yield this.useCase.getAllOrganization();
            return organizations;
        });
        this.getOrganizationById = (id) => __awaiter(this, void 0, void 0, function* () {
            const organization = yield this.useCase.getOrganizationById(id);
            return organization;
        });
        this.createOrganization = ({ name, image, address, phone, email, welcomeText, aboutUsText, slide, delete_at }) => __awaiter(this, void 0, void 0, function* () {
            const newOrganization = new organizationValues_1.OrganizationValue({ name, image, address, phone, email, welcomeText, aboutUsText, slide, delete_at });
            const organization = this.useCase.createOrganization(newOrganization);
            return organization;
        });
        this.deleteOrganization = (id) => __awaiter(this, void 0, void 0, function* () {
            const organization = yield this.useCase.deleteOrganization(id);
            return organization;
        });
        this.updateOrganization = (id, organization) => __awaiter(this, void 0, void 0, function* () {
            const updateOrganization = yield this.useCase.updateOrganization(id, organization);
            return updateOrganization;
        });
    }
}
exports.OrganizationUseCase = OrganizationUseCase;
//# sourceMappingURL=organizationUseCase.js.map