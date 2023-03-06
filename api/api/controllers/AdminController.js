const AdminModels = require('../models/AdminModel');

const admininsert = async(req,res) => {
    try{
        let admin = await  AdminModels.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            city : req.body.city,
            gender : req.body.gender,
        })
        if(admin){
            return res.json({"status" : "1","messege" : "Admin successfully created"});
        }else{
            return res.json({"status" : "0","messege" : "Admin not successfully created"});
        }
    }catch(err){
        return res.json({"status" : "0","messege" : err});
    }
}

const adminview = async(req,res) => {
    try{
        let adminview = await AdminModels.find({});
        if(adminview){
            return res.json({"status" : "1","messege" : adminview});
        }else{
            return res.json({"status" : "0","messege" : "Record not fetch"});
        }
    }catch(erre){
        return res.json({"status" : "0","messege" : erre});
    }
}

const admindelete = async(req,res) => {
        let id = req.query.id;
        try{
            let admindelete = await AdminModels.findOneAndDelete(id);
            if(admindelete){
                return res.json({"status" : "1","messege" : "Admin successfully delete"});
            }else{
                return res.json({"status" : "0","messege" : "Admin not successfully delete"});
            }
        }catch(err){
            return res.json({"status" : "0","messege" : err});
        }
}

const adminupdate = async(req,res) => {
    let id = req.body.id;
   try{
        let adminedit = await AdminModels.findByIdAndUpdate(id,{
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            city : req.body.city,
            gender : req.body.gender,
        })
        if(adminedit){
            return res.json({"status" : "1","messege" : "Admin successfully update"});
        }else{
            return res.json({"status" : "0","messege" : "Admin not successfully update"});
        }
   }catch(err){
    return res.json({"status" : "0","messege" : err});
   }
}

module.exports = {admininsert,adminview,admindelete,adminupdate};