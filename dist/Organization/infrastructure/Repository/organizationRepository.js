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
const organization_1 = __importDefault(require("../model/organization"));
class MongoRepository {
    getAllOrganization() {
        return __awaiter(this, void 0, void 0, function* () {
            const organizations = yield organization_1.default.find();
            return organizations;
        });
    }
    getOrganizationById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const organization = yield organization_1.default.findById(id);
            return organization;
        });
    }
    createOrganization(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const newOrganization = new organization_1.default(organization);
            yield newOrganization.save();
            return newOrganization;
        });
    }
    deleteOrganization(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const organization = yield organization_1.default.findByIdAndDelete(id);
            return organization;
        });
    }
    updateOrganization(id, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const upDateOrganization = yield organization_1.default.findByIdAndUpdate(id, organization, { new: true });
            return upDateOrganization;
        });
    }
}
exports.MongoRepository = MongoRepository;
//# sourceMappingURL=organizationRepository.js.map