const express =require('express');
const router=express.Router();
const userController=require('../controllers/user.controller');
const {body}=require("express-validator");
const authMiddleware=require('../middlewares/auth.middlewares');
router.post('/register',[
    body('email').isEmail().withMessage('Invalid message'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name should contain only 3 characters long'),
    body('password').isLength({min:6}).withMessage('password must be atleast 6 character long ')
],
userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid message'),
    body('password').isLength({min:6}).withMessage('password must be atleast 6 character long ')
],
userController.loginUser
)
router.get('/profile',authMiddleware.authenticate, userController.getUserProfile);
router.get('/logout',authMiddleware.authenticate,userController.logoutUser);



module.exports=router;