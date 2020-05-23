/*
CREATE TABLE vehicles (
    id INTEGER NOT NULL AUTO_INCREMENT,
    plate varchar(10) ,
    make varchar(50),
    model varchar(50),
    problem varchar(255),
    notes varchar(255) , 
    fixed TINYINT(1), 
    createdAt DATETIME NOT NULL , 
    updatedAt DATETIME NOT NULL , 
    PRIMARY KEY ('id')
);
*/
-- SELECT TOP 50 id, plate, make, model, problem, notes , fixed FROM vehicles ORDER BY id ASC ;
-- SELECT TOP 50 id, plate, make, model, problem, notes , fixed FROM vehicles WHERE id = 3 ;

/*
INSERT INTO vehicles
(plate, make, model, problem, notes , fixed )
VALUES
("ACSR 114", "Chevrolet", "Impala", "Impossible to drive car at night", "Replaced headlight bulb" , 1 ),
("GENI US3", "Ford", "F150", "Car drives very slowly, especially in mornings", "Handbrake cable is sticking & needs to be replaced" , 0 ),
("AXSN 541", "Honda", "Accord", "Brakes squeak a lot", "Performed routine brakes service" , 1 ),
("ABRS 240", "Honda", "Civic SR", "Engine stinks, and leaks oil on driveway", "Needs an oil change service" , 0 ),
("BBAE 311", "Ford", "Mustang", "Brakes take long to stop car", "Added proper amount of air to all 4 tires" , 1 ), 
("CBCC 021", "BMW", "X5", "Car very, very difficult to drive forward", "Driver needs to go back to Driving School" , 0 )  

*/

/*
-- for Postman --> NOTE WELL !!! In Postman, ensure to set Header to 'Content-Type': 'application/json' !!!!
{
    "plate": "ACSR 114" ,
    "make" : "Chevrolet" , 
    "model" : "Impala", 
    "problem" : "Impossible to drive car at night", 
    "notes" : "Replaced headlight bulb" , 
    "fixed" :  1 
}

{
    "plate": "GENI US3",
    "make": "Ford",
    "model": "F150",
    "problem": "Car drives very slowly, especially in mornings",
    "notes": "Handbrake cable is sticking & needs to be replaced",
    "fixed": 0

}
{
    "plate": "CBCC 021",
    "make": "BMW",
    "model": "X5",
    "problem": "Car very, very difficult to drive forward",
    "notes": "Driver needs to go back to Driving School",
    "fixed": 0

}
{
    "plate": "BBAE 311",
    "make": "Ford",
    "model": "Mustang",
    "problem": "Brakes take long to stop car",
    "notes": "Added proper amount of air to all 4 tires",
    "fixed": 1 
}

*/
