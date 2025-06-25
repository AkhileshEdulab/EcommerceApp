import jwt from 'jsonwebtoken'
import userModel from '../Models/userModel.js';

const generateRefreshToken = async(userId) =>{
    const token = await jwt.sign({id:userId},
    process.env.SECRET_KEY_REFRESS_TOKEN,
    {expiresIn:"7d"}
    );
    
   const updateRefressTokenUser = await userModel.findOne(
    {_id:userId},
    {refresh_token:token},

)
return token
}


export default generateRefreshToken;