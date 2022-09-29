"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const memberRepository_1 = require("../Repository/memberRepository");
const member_1 = require("../controller/member");
const memberUseCase_1 = require("../../application/memberUseCase");
const router = (0, express_1.Router)();
// Dependency Injection
const mongoRepository = new memberRepository_1.MongoRepository();
const memberUseCase = new memberUseCase_1.MemberUseCase(mongoRepository);
const memberController = new member_1.MemberController(memberUseCase);
router.get('/', memberController.getAllMembers);
router.post('/create', memberController.createMember);
router.delete('/delete/:id', memberController.deleteMember);
router.put('/update/:id', memberController.updateMember);
router.get('/:id', memberController.getMemberById);
exports.default = router;
//# sourceMappingURL=member.js.map