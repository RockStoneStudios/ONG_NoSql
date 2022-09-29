import {Router} from 'express';
import { MongoRepository } from '../Repository/memberRepository';
import { MemberController } from '../controller/member';
import { MemberUseCase } from '../../application/memberUseCase';
const router = Router();

// Dependency Injection
const mongoRepository = new MongoRepository();
const memberUseCase = new MemberUseCase(mongoRepository);
const memberController = new MemberController(memberUseCase);

router.get('/',memberController.getAllMembers);
router.post('/create',memberController.createMember);
router.delete('/delete/:id',memberController.deleteMember);
router.put('/update/:id',memberController.updateMember);
router.get('/:id',memberController.getMemberById);



export default router;