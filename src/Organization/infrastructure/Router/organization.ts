import { Router } from "express";
import { MongoRepository } from "../Repository/organizationRepository";
import { OrganizationController} from "../controller/organization";
import { OrganizationUseCase } from "../../application/organizationUseCase";


const router = Router();

// Dependecies Injection

const mongoRepository = new MongoRepository();
const organizationUseCase = new OrganizationUseCase(mongoRepository);
const organizationController = new OrganizationController(organizationUseCase);


router.get('/',organizationController.getAllOrganizations);
router.post('/create',organizationController.createOrganization);
router.delete('/delete/:id',organizationController.deleteOrganization);
router.put('/update/:id',organizationController.updateOrganization);
router.get('/:id',organizationController.getOrganizationById);



export default router;