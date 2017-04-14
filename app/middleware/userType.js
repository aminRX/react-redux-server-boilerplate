'use strict';

const Promise = require('bluebird');
var jwt = require('jsonwebtoken');

exports.UserTypePaciente = function (req,res,next){
  console.log(req.decoded);
  let db =  require('../../config/initializers/database').GetDB();
  var UserType = new Promise((resolve, reject) => {
    let query = " select ut.name from users " +
          " as u inner join user_types as ut "+
          " on ut.id=u.user_types_id "+
          " where u.id = ? " ;
    let values = [req.decoded.id];
    db.query(query, values,(err,results)=> {
      if(err){
        console.log(err);
        res.json(err);
      }
      console.log(results);
      if (results[0].name == 'patient'){
        next();
      }else{
        res.json("'error':'userType'");
      }
    });
  });
};


exports.UserTypeDoctor = function (req,res,next){
  console.log(req.decoded);
  let db =  require('../../config/initializers/database').GetDB();
  var UserType = new Promise((resolve, reject) => {
    let query = " select ut.name from users " +
          " as u inner join user_types as ut "+
          " on ut.id=u.user_types_id "+
          " where u.id = ? " ;
    let values = [req.decoded.id];
    db.query(query, values,(err,results)=> {
      if(err){
        console.log(err);
        res.json(err);
      }
      console.log(results);
      if (results[0].name == 'doctor'){
        next();
      }else{
        res.json("'error':'userType'");
      }
    });
  });
};


exports.UserTypeSupport = function (req,res,next){
  console.log(req.decoded);
  let db =  require('../../config/initializers/database').GetDB();
  var UserType = new Promise((resolve, reject) => {
    let query = " select ut.name from users " +
          " as u inner join user_types as ut "+
          " on ut.id=u.user_types_id "+
          " where u.id = ? " ;
    let values = [req.decoded.id];
    db.query(query, values,(err,results)=> {
      if(err){
        console.log(err);
        res.json(err);
      }
      console.log(results);
      if (results[0].name == 'support'){
        next();
      }else{
        res.json("'error':'userType'");
      }
    });
  });
};
