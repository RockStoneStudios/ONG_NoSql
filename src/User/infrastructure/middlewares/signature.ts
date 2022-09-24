import jwt from 'jsonwebtoken';
import {Request,Response,NextFunction} from 'express';


export const generateSignature = async (payload:any) => {
      return jwt.sign(payload,<string>process.env.TOKEN_SECRET);
}

interface IPayload {
    id : string
}

export const checkOut = (req:Request,res:Response,next:NextFunction) => {
     let token;
     if(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) return res.status(401).json({message : 'Token Invalid'});
     try{
         token = req.headers.authorization.split(" ")[1];
         const payload = jwt.verify(token,<string> process.env.TOKEN_SECRET) as IPayload;
         req.user = payload.id
        return  next();
     }catch(error){
         return res.status(403).json({message : 'Forbidden'});
     }
}

