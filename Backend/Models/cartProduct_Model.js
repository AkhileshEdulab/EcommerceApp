import mongoose from "mongoose";

const cartProduct = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.ObjectId,
        ref:'product'
    },
    quantity:{
        type:Number,
        default:1
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }
},{timestamps:true})

const cartModel = mongoose.model("CartProduct",cartProduct)

export default cartModel ;