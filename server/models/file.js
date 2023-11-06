
import mongoose from "mongoose"
const fileschema = new mongoose.Schema({
    path:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    downloadcontent:{
   
        type:Number,
        require:true,
        default:0
    }
})
  const File = mongoose.model('file',fileschema);
  export default File; 