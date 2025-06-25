import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Provide name"]
    },
    email:{
         type:String,
         required:[true,"Provide email"],
         unique:true
    },
    password:{
        type:String,
        required:[true,'Provide password']
    },
    avatar:{
        type:String,
        default:""
    },
    mobile:{
        type:Number,
        default:null
    },
    
    verify_email:{
        type:Boolean,
        default:false
    },
     access_token:{
        type:String,
        default:''
    },
    refresh_token:{
        type:String,
        default:''
    },
    last_login_date:{
        type:Date,
        default:""
    },
    address_details:{
        type:mongoose.Schema.ObjectId,
        ref:"address",
        default:null
    },
    orderHistory:{
         type:mongoose.Schema.ObjectId,
        ref:"order",
        default:null
    },
    shoppingCart:{
        type:mongoose.Schema.ObjectId,
        ref:"cartProduct",
        default:null
    },
    status:{
        type:String,
        enum:["Active","Inactive","Suspended"],
        default:"Active"
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
   otp:{
        type:String,
    },
    otp_expire:{
        type:Date,
    },
},{timestamps:true}
)

const userModel =mongoose.model("User",userSchema);

export default userModel;

