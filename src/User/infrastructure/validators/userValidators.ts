import {check} from 'express-validator';
import {Request,Response,NextFunction} from 'express';
import { validateResult } from '../helpers/validateHelper';


export const validateCreate = [
    check('firstName').exists().not().isEmpty(),
    check('lastName').exists().not().isEmpty(),
    check('age').isNumeric().not().isEmpty(),
    check('email').exists().isEmail(),
    check('password').exists().not().isEmpty().isLength({min : 6}),
    check('photo').exists().isEmpty(),
    (req:Request,res:Response,next:NextFunction) => {
         validateResult(req,res,next)
    }
    
]