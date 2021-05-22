// const express=require('express');
// const route = express.Router()
// const services = require('../services/render');
//  const controller = require('../controller/controller');

// route.get('/',services.homeRoutes);

 
//  route.get('/add-employee', services.add_employee);

 
//  route.get('/update-employee', services.update_employee);

//   //API route
//   route.post('/api/employees',controller.create)
//   route.get('/api/employees',controller.find)
//   route.put('/api/employees/:id',controller.update)
//   route.delete('/api/employees:id',controller.delete)
  





//  module.exports = route





 const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-employee', services.add_employee)

/**
 *  @description for update user
 *  @method GET /update-user       
 */                           
route.get('/update-employee', services.update_employee)


// API
route.post('/api/employees', controller.create);
route.get('/api/employees', controller.find);
route.put('/api/employees/:id', controller.update);
route.delete('/api/employees/:id', controller.delete);


module.exports = route