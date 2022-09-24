import mongoose from 'mongoose';

export default mongoose.connect((<string>process.env.DB || 'mongodb://localhost:27017/ong')).then(()=> console.log(`Database Connected Successful`))
                                                       .catch(error => console.log(error));
