 var Employeedb =require('../model/model');

 //saving the new employee
 //creating API request
 exports.create = (req,res) => {
   // validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"});
         return;
    }


   //new employee 
   const employee = new Employeedb({
       username:req.body.username,
       email:req.body.email,
       gender:req.body.gender,
       status: req.body.status
   })

   //savign the employess in the database
    employee
      .save(employee)
      .then(data =>{
             
        res.send(data)

      })
      
      .catch(err =>{

        res.status(500).send({
            message:err.message || "Some error occured while creating a create option"
        });

      });

 }
 // retrive and return all employess or one of them

 exports.find = (req,res) =>{


 }
 //Update a new one by the id

exports.update =(req,res) =>{

}
exports.delete =(req,res) =>{

}