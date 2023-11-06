
import mongoose from "mongoose";

const DBconnection = async()=>{
    const MongoDb_URL = `mongodb+srv://user2000:prafulchaudhary@cluster0.jvtdvch.mongodb.net/?retryWrites=true&w=majority`
    try{
              await mongoose.connect(MongoDb_URL,{useNewUrlParser:true})
             console.log("SuccessFully Connect For MongoDb");
    }catch(error){
                     
        console.error(`error while connnecting with the mongodb`,error.message);
    }
}
export default DBconnection;