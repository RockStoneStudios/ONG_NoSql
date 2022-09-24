import bcrypt from 'bcrypt';


export const passwordCompare = async (payload:string,savePassword:string) : Promise<boolean> => {
     return await bcrypt.compare(payload,savePassword);
}