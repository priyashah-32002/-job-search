const mongoose = require('mongoose');
// var Employeedb =require('../model/model');
var schema = new mongoose.Schema({

    username:{
    type: String,
    required:true

    },
    job_category:{
      type:String,
      required :true
      // unique:true

    },
    gender:String,
    status:String

})

const Employeedb = mongoose.model('employeedb',schema);

module.exports  = Employeedb;