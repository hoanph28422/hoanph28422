import axios from "axios";
import dotenv from"dotenv"
import joi from "joi";
import product from"./model"

dotenv.config();
const {API_URI}=process.env;
const productS = joi.object({
    name:joi.string().required(),
    price:joi.number().required(),
    decribe:joi.string()
});
export const getAll =async (req,res)=>{
    try {
        const products= await Product.find();
        if(products.length===0){
            return res.json({
                message:"không có sp",
            });
        }
        return res.json(products);
    } catch (error) {
        return res.status(400).json({
            message:error,
        })
    }
}
export const create = async function(req,res){
    try{
        const{error}=productS.validate(res.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const product= await Product.create(res.body);
        if(!product){
            return res.json({
                message:"không thêm sản phẩm",
            });
        }
        return res.json({
            message:"Thêm sản phẩm thành công",
            data:product,
        });
    }   
    catch(error){
        return res.status(400).json({
            message:error,
        })
    }
}