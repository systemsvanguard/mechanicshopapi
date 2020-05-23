const db = require('../model/index')
const Vehicle = db.vehicles 
const Op = db.Sequelize.Op

// Create a new record ~ C in CRUD ~ post. 
exports.create = (req, res) => {
    // first, validate!
    if (!req.body.plate) {
        res.status(400).send({
            message: "Fields cannot be empty please"
        })
        return
    }
    // now, create record
    const vehicle = {
        plate: req.body.plate,
        make: req.body.make,
        model: req.body.model,
        problem: req.body.problem,
        notes: req.body.notes,
        fixed: req.body.fixed ? req.body.fixed : false
    }
    // save record to database
    Vehicle.create(vehicle)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "An error occurred while creating record."
        });
        });    
}

// Retrieve ALL records ~ R in CRUD ~ get plate
exports.findAll = (req, res) => {
    const plate = req.query.plate;
    var condition = plate ? { plate: { [Op.like]: `%${plate}%` } } : null;
  
    Vehicle.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "An error occurred while retrieving records."
        });
      });
  };

// Retrieve all fixed vehicles 
exports.findAllFixed = (req, res) => {
    Vehicle.findAll({ where: { fixed: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "An error occurred while retrieving records."
        });
      });
  };

// Retrieve a specific record by vehicle ID 
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Vehicle.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Oops! Error retrieving record with id=" + id
        });
      });
  };
//---------->

// Update a specific record by vehicle ID ~ U in CRUD ~ update
exports.update = (req, res) => {
    const id = req.params.id;
  
    Vehicle.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Record was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update record with id=${id}. Possibly, Vehicle was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating record with id=" + id
        });
      });
  };

// Delete a specific record by vehicle ID ~ D in CRUD ~ delete 
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Vehicle.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Record was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete record with id=${id}. Possibly, Vehicle record was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete record with id=" + id
        });
      });
  };

// Delete ALL records / purge DB ~ use with caution!!
exports.deleteAll = (req, res) => {
    Vehicle.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Records were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "An error occurred while deleting all vehicle records."
        });
      });
  }; 