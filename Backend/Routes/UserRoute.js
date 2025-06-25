import {Router} from 'express';
import {avatarController, loginUserController, logoutController, registerUserController, removeImageController,  updateUserDetails,  verifyEmailController} from '../Controllers/UserController.js'
import auth from '../Middleware/auth.js';
import upload from '../Middleware/multer.js';

const userRouter = Router()

userRouter.post('/register',registerUserController);
userRouter.post('/verifyEmail',verifyEmailController);
userRouter.post('/login',loginUserController);
userRouter.get('/logout',auth,logoutController);
userRouter.put('/user-avatar',auth,upload.array("avatar"),avatarController);
userRouter.delete('/deleteImage',auth,removeImageController);
userRouter.put('/:id',auth,updateUserDetails);




export default userRouter;