
const RegisterModel = require('../models/RegisterModel');

const jwtData = require('jsonwebtoken'); //token create karshe;


const register = async(req,res) =>{
    console.log("its running")
    try{
        // console.log(req.body);
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let redisterData = await RegisterModel.findOne({email : email})
        if(redisterData){
            return res.json({"status" : "0","messege" : "User already register"})
        }else{
            let register = await RegisterModel.create({
                name : name,
                email : email,
                password : password,
            });
            if(register){
                return res.json({"status" : "1","messege" : "User successfully register"})
            }else{
                return res.json({"status" : "0","messege" : "User not successfully register"})
            }
        }
    }catch(err){
        return res.json({"status" : "0","messege" : err})
    }
}

const registerData = async(req,res) => {
    console.log('its running r data')
    try{
        let registerdata = await RegisterModel.find({});
        if(registerdata){
            return res.json({"status" : "1","messege" : registerdata});
        }else{
            return res.json({"status" : "0","messege" : "Record not fetch"});
        }
    }catch(erre){
        return res.json({"status" : "0","messege" : err});
    }
}

const login = async(req,res) => {
    let email = req.body.email; 
    console.log(req.body)
    try{
        let user = await RegisterModel.findOne({email : email});
        
        if(!user || user.password != req.body.password){
            return res.json({"status" : "0","messege" : "Email and password not match"});
        }

        let token = jwtData.sign(user.toJSON(),"BLOGS",{expiresIn : 1000*60*60});
        console.log(token)
        return res.json({"status" : "1","token" : token});

    }catch(err){
        return res.json({"status" : "0","messege" : err})
    }
}

module.exports = {registerData,login, register};