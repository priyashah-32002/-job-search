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

   //savign the employess in the database by post method 
    employee
      .save(employee)
      .then(data =>{
       //redirect to diff users      
        res.redirect('/add-employee');

        })
      
      .catch(err =>{

        res.status(500).send({
            message:err.message || "Some error occured while creating a create option"
        });

      });

 }
 // retrive and return all employess or one of them

 exports.find = (req,res) =>{

    //finding a single one form the record use this
  if(req.query.id){
      const id = req.query.id;
      Employeedb.findById(id)
      .then(data =>{
          if(!data){
              res.status(404).send({message:"Not found employee with id" +id})
          }else{
              res.send(data)
          }
      })
      .catch(err =>{
          res.status(500).send({message: "Error retirving employee" +id})
      })
  }
  else{



    Employeedb.find()
    .then(employee =>{
        res.send(employee)
    })
    .catch(err =>{
        res.status(500).send({message:err.message || "Error Occured while retriving rhe info"})
    })

 }
}
 //Update a new one by the id

exports.update =(req,res) =>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
    }
    
    const id = req.params.id;
    Employeedb.findBYIdAndUpdate(id,req.body ,{useFindAndModify:false})
    .then(data=>{
          
        if(!data){
            res.status(404).send({message:`Cannot Update the data with ${id}.Maybe id is wrong`})
        }else{
            res.send(data)
        }
        })
         .catch(err =>{
             res.status(500).send({message:"Error Update user information"})
         })


}
//deleting
exports.delete =(req,res) =>{
   const id = req.params.id;

   Employeedb.findByIdAndDelete(id)
   .then(data =>{
       if(!data){
           res.send(404).send({ message:`Cannot delete with ${id}.Maybe id is wrong`})
       }else{
           res.send({
               message:"Employee is deleted!"
           })
       }
   })
   .catch(err =>{
       res.status(500).send({
           message:"Could not delete Employee with id =" +id
       });
   });
}