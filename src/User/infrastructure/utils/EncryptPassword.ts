import bcrypt from 'bcrypt';

export const encryptPassword = async (password:string) :Promise<string> =>{
     const salt:string = await bcrypt.genSalt(10);
     return await bcrypt.hash(password,salt);
}