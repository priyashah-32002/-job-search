const mongoose = require('mongoose');
// var Employeedb =require('../model/model');
var Schema = new mongoose.Schema({

    username:{
    type: String,
    required:true

    },
    job_category:{
      type:String,
      required :true,
      unique:true

    },
    gender:String,
    status:String

})

const Employeedb = mongoose.model('Employeedb',Schema);

module.exports  = Employeedb;