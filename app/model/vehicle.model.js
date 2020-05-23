/* ID, or unique identifier to be supplied by DB */
module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define('vehicle', {
        plate: {type: Sequelize.STRING }, // license plate 
        make: {type: Sequelize.STRING }, // vechicle make, example "Toyota"
        model: {type: Sequelize.STRING }, // vechicle model, example "Camry"
        problem: {type: Sequelize.STRING }, // what is wrong with the vehicle?
        notes: {type: Sequelize.STRING }, // comments by mechanics
        fixed: {type: Sequelize.BOOLEAN } // has the mechanical problem been resolved? 
    }  )

    return Vehicle
}