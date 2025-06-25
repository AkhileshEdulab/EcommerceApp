import bcrypt from 'bcrypt';
import userModel from '../Models/userModel.js';
import sendEmailFun from '../Database/sendEmail.js';
import VerificationEmail from '../Utils/VerifyEmailTemplate.js';
import jwt from 'jsonwebtoken';
import genarateAccessToken from '../Middleware/generateAccessToken.js';
import generateRefreshToken from '../Middleware/generateRefreshToken.js';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

export async function registerUserController(req,res) {
    
    try {
        let user;
            const {name,email,password} = req.body;
            if(!name || !email || !password){
                return res.status(400).json({
            message:'Please provide name, email and password.',
            error:true,
            success:false
                })
            }
            
            user = await userModel.findOne({email:email})
            if(user){
                return res.status(400).json({
            message:'User already registered with this email.',
            error:true,
            success:false
                })
            }
            
            const verifyCode = Math.floor(100000+Math.random() * 900000).toString();
           

            const salt =await bcrypt.genSalt(10);
            const hashPassword =await bcrypt.hash(password,salt)

            user = new userModel({
                name:name,
                email:email,
                password:hashPassword,
                otp:verifyCode,
               otp_expire:Date.now()+600000
            })
            await user.save()

        // email send hoga yaha se.
        const verifyEmail = await sendEmailFun({
            sendTo :email,
            subject:"Verify Email frome ecommerce app.",
            text:"",
            html:VerificationEmail(name,verifyCode),
            
        })

        const token = jwt.sign(
            {email:user.email,id:user._id},
            process.env.JSON_WEB_TOKEN_SECRET_KEY
        );

        return res.status(200).json({
            success:true,
            message:"User registered successfully! Please verify your email.",
            token:token
        })


    } catch (error) {
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}

export async function verifyEmailController(req,res) {
    try {
        const {email,otp}= req.body;

        const user = await userModel.findOne({email:email});
        if(!user){
            return res.status(400).json({
                message:"User not found!.",
                error:true,
                success:false
            })
        }
        const isCodeValid = user.otp === otp;
        const isNotExpire = user.otp_expire > Date.now();

        if(isCodeValid && isNotExpire){
            user.verify_email=true;
            user.otp=null;
            user.otp_expire=null;
            await user.save();
            return res.status(200).json({
                message:"User Verified Successfully.",
                error:false,
                success:true,
            })
        }else if(!isCodeValid){
            return res.status(400).json({
                message:"Invalid Otp.",
                error:true,
                success:false,
            })
        }else{
            return res.status(400).json({
                message:"Otp Expired.",
                error:true,
                success:false,
            })
        }
    } catch (error) {
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false,
        })
    }
}

export async function loginUserController(req,res) {
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email:email})
        if(!user){
            return res.status(400).json({
                message:"user not registered.",
                error:true,
                success:false
            })
        }
        if(user.status !=="Active"){
            return res.status(400).json({
                message:"Contact to admin.",
                error:true,
                success:false
            })
        }
        if(user.verify_email !== true){
             return res.status(400).json({
                message:"Your Email is not verify yet please verify your email first.",
                error:true,
                success:false
            })
        }
        
        const checkPassword =await bcrypt.compare(password,user.password);
        if(!checkPassword){
            return res.status(400).json({
                message:"check your password.",
                error:true,
                success:false
            })
        }

        const accessToken = await genarateAccessToken(user._id);
        const refreshToken = await generateRefreshToken(user._id);

        const updateUser = await userModel.findByIdAndUpdate(user?._id,{
            last_login_date:new Date()
        })

        const cookiesOption = {
            httpOnly:true,
            secure:true,
            sameSite:"None"
        }

        res.cookie("accessToken",accessToken,cookiesOption);
        res.cookie("refreshToken",refreshToken,cookiesOption);

        return res.status(200).json({
            message:'login successfully',
            error:false,
            success:true,
            data:{
                accessToken,
                refreshToken
            }
        })

    } catch (error) {
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}



export async function logoutController(req, res) {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
        error: true,
        success: false,
      });
    }

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    res.clearCookie("accessToken", cookieOptions);
    res.clearCookie("refreshToken", cookieOptions);

    await userModel.findByIdAndUpdate(userId, {
      refresh_token: "",
    });

    return res.status(200).json({
      message: "Logout successful.",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
}


// var  imageArr = [];
// export async function avatarController(req,res) {
//     try {
//         imageArr = [];
//         const userId = req.userId;
//         const image = req.files;
//      console.log("upload files",image);
//  const options ={
//             use_filename:true,
//             unique_filename:false,
//             overwrite:false
//         };
       
//         for(let i = 0; i < req?.files?.length; i++){
            
//              const img = await cloudinary.uploader.upload(
//                 image[i].path,
//                 options,
//                 function (error,result) {
//                     console.log(result);
//                     imageArr.push(result.secure_url);
//                     fs.unLinkSync(`uploads/${req.files[i].filename}`);
//                     console.log(result.files[1].filename);
                    
//                 }
//             );
//         }

//         return res.status(200).json({
//             _id:userId,
//             avatar:imageArr[0]
//         })

           
//     } catch (error) {
//         return res.status(500).json({
//             message:error.message||error,
//             success:false,
//             error:true,
//         })
//     }
// }



var imageArr = [];

export async function avatarController(req, res) {
  try {
    imageArr = [];

    const userId = req.userId;
    const images = req.files; 

    const user = await userModel.findOne({_id:userId})
  if(!user){
        return res.status(500).json({
            message:"User not found",
            error:true,
            success:false,
        })
    }
    const imgUrl = user.avatar;

const urlArr = imgUrl.split("/");
const avatar_image = urlArr[urlArr.length -1];    

const imageName = avatar_image.split(".")[0];

if(imageName){
const res = await cloudinary.uploader.destroy(
    imageName,
    (error,result)=>{

    }
)
}
   
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    };

    for (let i = 0; i < images.length; i++) {
      const filePath = images[i].path;

      const result = await cloudinary.uploader.upload(filePath, options);

      imageArr.push(result.secure_url);

      // Delete the file locally
      fs.unlinkSync(filePath);
    }

    user.avatar = imageArr[0];
    await user.save();

    return res.status(200).json({
      _id: userId,
      avatar: imageArr[0],
    });

  } catch (error) {
    console.error('❌ Avatar Upload Error:', error);
    return res.status(500).json({
      message: error.message || 'Something went wrong',
      success: false,
      error: true,
    });
  }
}



export async function removeImageController(req, res) {
  try {
    const imgUrl = req.query.img;

    if (!imgUrl || typeof imgUrl !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Image URL is required as a query parameter: ?img=yourImageURL',
      });
    }

    const urlParts = imgUrl.split('/');
    const fileNameWithExtension = urlParts[urlParts.length - 1]; // image.jpg
    const publicId = fileNameWithExtension.split('.')[0]; // image

    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result === 'ok') {
      return res.status(200).json({
        success: true,
        message: 'Image deleted successfully',
        result,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: 'Image deletion failed',
        result,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
    });
  }
}

export async function updateUserDetails(req,res) {
    try {
        const userId = req.userId;
        const {name,email,password,mobile}= req.body;
        console.log("req.body:", req.body);

        const userExist = await userModel.findById(userId);
        if(!userExist)
             return res.status(400).send("The user cannot be updated.");
        
        let verifyCode="";

        if(email !== userExist.email){
            verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
        }

        let hashPassword = ""
        if(password){
            const salt = await bcrypt.genSalt(10)
            hashPassword = await bcrypt.hash(password,salt)
        }else{
            hashPassword = userExist.password;
        }

        const updateUser = await userModel.findByIdAndUpdate(
            userId,{
            name:name,
            mobile:mobile,
            email:email,
            verify_email:email !== userExist.email ? false : true,
            password:hashPassword,
            otp:verifyCode!==""? verifyCode :null,
            otp_expire:verifyCode!==""? Date.now() +600000:''
        },
        {new:true}
    )
        if(email !== userExist.email){
            console.log("EMAIL TO SEND VERIFICATION:", email);
            console.log("OTP:", verifyCode);
            await sendEmailFun({
                to:email,
                subject:"Verify email from Ecommerce App",
                text:"",
                html: VerificationEmail(name,verifyCode)
            })
        }
        return res.status(200).json({
            message:"User Updated successfully",
            error:false,
            success:true,
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}

// export async function updateUserDetails(req, res) {
//     try {
//         const userId = req.userId;
//         const { name, email, password, mobile } = req.body;

//         const userExist = await userModel.findById(userId);
//         if (!userExist) {
//             return res.status(400).send("The user cannot be updated.");
//         }

//         let verifyCode = "";
//         if (email !== userExist.email) {
//             verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
//         }

//         let hashPassword = password
//             ? await bcrypt.hash(password, await bcrypt.genSalt(10))
//             : userExist.password;

//         const updateUser = await userModel.findByIdAndUpdate(
//             userId,
//             {
//                 name,
//                 mobile,
//                 email,
//                 verify_email: email === userExist.email,
//                 password: hashPassword,
//                 otp: verifyCode !== "" ? verifyCode : null,
//                 otp_expire: verifyCode !== "" ? Date.now() + 600000 : null,
//             },
//             { new: true }
//         );

//         if (verifyCode) {
//             await sendEmailFun(
//                 email,
//                 "Verify email from Ecommerce App",
//                 "",
//                 VerificationEmail(name, verifyCode)
//             );
//         }

//         return res.status(200).json({
//             message: "User updated successfully.",
//             success: true,
//             error: false,
//         });
//     } catch (error) {
//         return res.status(500).json({
//             message: error.message || error,
//             error: true,
//             success: false,
//         });
//     }
// }
