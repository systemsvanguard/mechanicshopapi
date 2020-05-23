module.exports = app => {
    const vehicles = require('../controller/vehicle.controller')
  
    var router = require("express").Router();
  
    // Create a new record ~ C in CRUD ~ post
    router.post("/", vehicles.create);
  
    // Retrieve ALL records ~ R in CRUD ~ get 
    router.get("/", vehicles.findAll);
  
    // Retrieve all fixed vehicles 
    router.get("/fixed", vehicles.findAllFixed);
  
    // Retrieve a specific record by vehicle ID 
    router.get("/:id", vehicles.findOne);
  
    // Update a specific record by vehicle ID ~ U in CRUD ~ update
    router.put("/:id", vehicles.update);
  
    // Delete a specific record by vehicle ID ~ D in CRUD ~ delete 
    router.delete("/:id", vehicles.delete);
  
    // Delete ALL records / purge DB ~ use with caution!!
    router.delete("/", vehicles.deleteAll);
  
    app.use('/api/vehicles', router)
  };
