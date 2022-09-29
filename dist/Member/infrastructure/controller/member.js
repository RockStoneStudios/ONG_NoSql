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
exports.MemberController = void 0;
class MemberController {
    constructor(memberCase) {
        this.memberCase = memberCase;
        this.getAllMembers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const members = yield this.memberCase.getAllMembers();
                return res.status(200).json(members);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.getMemberById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const member = yield this.memberCase.getMemberById(req.params.id);
                return res.status(200).json(member);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.createMember = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const member = yield this.memberCase.createMemeber(req.body);
                return res.status(201).json({ message: `The Member ${member === null || member === void 0 ? void 0 : member.name} has been created Successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.deleteMember = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const member = yield this.memberCase.deleteMember(req.params.id);
                return res.status(200).json({ message: `The Member ${member === null || member === void 0 ? void 0 : member.name} has been deleted Successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.updateMember = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const member = yield this.memberCase.updateMember(req.params.id, req.body);
                return res.status(200).json(member);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.MemberController = MemberController;
//# sourceMappingURL=member.js.map