import { Router } from "express";
import { RoleController } from "../controller/role";
import { MongoRepository } from "../Repository/roleRepository";
import { RoleUseCase } from "../../application/roleUseCase";
import {validateResult} from '../helpers/validateHelpers';

import role from "../model/role";

const router = Router();

//Dependecies Injection

const mongoRepository = new MongoRepository();
const roleUseCase = new RoleUseCase(mongoRepository);
const roleController = new RoleController(roleUseCase);

router.get('/',roleController.getAllRoles);
router.post('/create',validateResult,roleController.createRole);
router.delete('/delete/:id',roleController.deleteRoleById);
router.put('/update/:id',validateResult,roleController.updateRoleById);
router.get('/:id',roleController.getRoleById);




export default router;