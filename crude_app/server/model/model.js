const mongoose = require('mongoose');
var Schema = new mongoose.Schema({

    Username:{
    type: String,
    required:true

    },
    email:{
      type:String,
      required :true,
      unique:true

    },
    gender:String,
    status:String

})

const Empoyeedb = mongoose.model('Employeedb',Schema);

module.exports  = Empoyeedb;