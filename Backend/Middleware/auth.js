// import jwt from 'jsonwebtoken';

// const auth = async(req,res,next)=>{
//     try {
//         const token = req.cookies.accessToken || req?.header?.authorization?.split(" ")[1];
//         if(!token){
//             return res.status(401).json({
//                 message:"Provide token"
//             })
//         }

//         const decode = await jwt.verify(token,process.env,SECRET_KEY_ACCESS_TOKEN)
//         if(!decode){
//              return res.status(500).json({
//         message:"unauthorized access.",
//         error:true,
//         success:false,
//        })
//         }

//         req.userId = decode.userId
//         next()
//     } catch (error) {
//        return res.status(500).json({
//         message:"You have not login.",
//         error:true,
//         success:false,
//        })
//     }
// }

// export default auth;


import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.accessToken ||
      req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Token is missing",
        error: true,
        success: false
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

    if (!decoded) {
      return res.status(403).json({
        message: "Unauthorized access.",
        error: true,
        success: false
      });
    }

    req.userId = decoded.id || decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
      error: true,
      success: false
    });
  }
};

export default auth;
