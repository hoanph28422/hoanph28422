import { string } from "joi";
import mongoose from "mongoose";
const productS= new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLength:3,
        
    },
    price:{
        type:Number,
    },
});
export default mongoose.model("Product",productS);