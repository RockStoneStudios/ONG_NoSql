import {check} from 'express-validator';
import {Request,Response,NextFunction} from 'express';
import { validateResult } from '../helpers/validateHelpers';


export const validateCreate = [
    check('name').exists().not().isEmpty(),
    check('description').exists().not().isEmpty(),
 
    (req:Request,res:Response,next:NextFunction) => {
         validateResult(req,res,next)
    }
    
]