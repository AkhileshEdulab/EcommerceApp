import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    address_line:{
        type:String,
        default:'',
    },
    city:{
        type:String,
        default:''
    },
    pincode:{
        type:Number,
    },
    mobile:{
        type:Number,
        default:null
    },
    state:{
        type:String,
        default:''
    },
    country:{
        type:String,
    },
    status:{
        type:Boolean,
        default:true
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        default:''
    }

},{timestamps:true})

const addressModel = mongoose.model("address",addressSchema);
export default addressModel;