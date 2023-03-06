const express = require('express');

const routes = express.Router();

const registercontroller = require('../controllers/RegisterController');
const admincontroller = require('../controllers/AdminController');
const LoggedUserController = require('../controllers/LoggedUserController')
const passport = require('passport');


routes.post('/register',registercontroller.register);
routes.get('/registerData',registercontroller.registerData);
routes.post('/getuser',LoggedUserController.getuser);
routes.post('/admininsert',admincontroller.admininsert);
routes.get('/adminview',passport.authenticate('jwt',{session : false}),admincontroller.adminview);
routes.delete('/admindelete',passport.authenticate('jwt',{session : false}),admincontroller.admindelete);
routes.patch('/adminupdate',passport.authenticate('jwt',{session : false}),admincontroller.adminupdate);
routes.post('/login',registercontroller.login);


module.exports = routes;