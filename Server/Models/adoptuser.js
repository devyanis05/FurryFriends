import { Schema,model } from "mongoose";
const userSchema=new Schema({
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
const User=model('User',userSchema);
export default User;