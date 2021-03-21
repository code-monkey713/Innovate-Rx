const sequelize = require("../config/connection");
const { 
  Diagnosis, 
  Doctor, 
  Patient,  
  Symptom, 
} = require("../models");

const seedSymptoms = require("./symptom-seeds");
const seedPatients = require("./patient-seeds");
const seedDoctors = require("./doctor-seeds");
const seedDiagnosis = require("./diagnosis-seeds");


const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedSymptoms();
  await seedPatients();
  await seedDoctors();
  await seedDiagnosis();
  

  process.exit(0);
};

seedAll();
