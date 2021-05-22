const axios = require('axios');


exports.homeRoutes =(req,res) =>{
                         //passing the data in the new key that is (employees)
    
  //making a get request to the /api/employees   
  axios.get('http://localhost:8030/api/employees')   
    .then(function(response){
        // console.log(response.data)
        res.render('index',{employees:response.data});


    })                      
     .catch(err =>{
         res.send(err);
     })

}

exports.add_employee = (req,res) =>{
    res.render('add_employee');
 }




exports.update_employee= (req,res) =>{
    axios.get('http://localhost:8030/api/employees',{params:{id:req.query.id}})
     .then(function(employeedata){
        res.render("update_employee",{employee:data.data}) 
     })
    
    // res.render('update_employee');
   
    .catch(err=>{
        res.send(err);
    } )
 }


