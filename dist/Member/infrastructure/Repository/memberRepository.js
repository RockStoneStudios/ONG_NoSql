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
const member_1 = __importDefault(require("../model/member"));
class MongoRepository {
    getAllMembers() {
        return __awaiter(this, void 0, void 0, function* () {
            const members = yield member_1.default.find();
            return members;
        });
    }
    getMemberById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const member = yield member_1.default.findById(id);
            return member;
        });
    }
    createMember(member) {
        return __awaiter(this, void 0, void 0, function* () {
            const newMember = new member_1.default(member);
            yield newMember.save();
            return newMember;
        });
    }
    deleteMember(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const member = yield member_1.default.findByIdAndDelete(id);
            return member;
        });
    }
    updateMember(id, member) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateMember = yield member_1.default.findByIdAndUpdate(id, member, { new: true });
            return updateMember;
        });
    }
}
exports.MongoRepository = MongoRepository;
//# sourceMappingURL=memberRepository.js.map