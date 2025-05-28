const bcrypt =require('bcrypt');
const e = require('express');
const jwt=require('jsonwebtoken');

const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required: true,
            minlength:[7,'minimum length of first name is 7 characters'],
                  },
        lastname:{
            type:String,
            minlength:[6,'minimum length of last name is 6 characters'],
           
        }

    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'minimum length of email is 5 characters'],
        
    },
    password:{
        type:String,
        required:true,
        select:false,
            },
            socketId:{
                type:String ,
            },
});
userSchema.methods.generateAuthToken =function(){
    const token =jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
};

userSchema.methods.comparePassword =async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword =async function(password) {
    return await bcrypt .hash(password,10);
}


const userModel=mongoose.model('user',userSchema);
module.exports=userModel;