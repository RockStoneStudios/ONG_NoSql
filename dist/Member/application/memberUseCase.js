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
exports.MemberUseCase = void 0;
const memberValue_1 = require("../domain/memberValue");
class MemberUseCase {
    constructor(useCase) {
        this.useCase = useCase;
        this.getAllMembers = () => __awaiter(this, void 0, void 0, function* () {
            const members = yield this.useCase.getAllMembers();
            return members;
        });
        this.getMemberById = (id) => __awaiter(this, void 0, void 0, function* () {
            const member = yield this.useCase.getMemberById(id);
            return member;
        });
        this.createMemeber = ({ name, facebookUrl, instagramUrl, linkedinUrl, image, description }) => __awaiter(this, void 0, void 0, function* () {
            const newMember = new memberValue_1.MemberValue({ name, facebookUrl, instagramUrl, linkedinUrl, image, description });
            const member = yield this.useCase.createMember(newMember);
            return member;
        });
        this.deleteMember = (id) => __awaiter(this, void 0, void 0, function* () {
            const member = yield this.useCase.deleteMember(id);
            return member;
        });
        this.updateMember = (id, { name, facebookUrl, instagramUrl, linkedinUrl, image, description }) => __awaiter(this, void 0, void 0, function* () {
            const updateMember = new memberValue_1.MemberValue({ name, facebookUrl, instagramUrl, linkedinUrl, image, description });
            const member = yield this.useCase.updateMember(id, updateMember);
            return member;
        });
    }
}
exports.MemberUseCase = MemberUseCase;
//# sourceMappingURL=memberUseCase.js.map