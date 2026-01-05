import mongoose from "mongoose";
const adoptSchema=new mongoose.Schema({
    name:{
        type:String,    
        required:true
    },
    address:{
        type:String,
        required:true
    },
     email:{ 
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:String,
        required:true,
        unique:true
    },
    petName:{
        type:String,
        required:true
    }
});
const adopt=mongoose.model('adopt',adoptSchema);
export default adopt;