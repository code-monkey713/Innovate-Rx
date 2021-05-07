const sequelize = require("../config/connection");
const { 
  Doctor, 
  Patient,  
  Symptom, 
  STDmodel,
  Treatment,
  Visit,
  Visit_Symptoms,
  Visit_Treatment,
} = require("../models");

const seedSymptoms = require("./symptom-seeds");
const seedPatients = require("./patient-seeds");
const seedDoctors = require("./doctor-seeds");
const seedTreatment = require("./treatment-seeds");
const seedVisits = require("./visit-seeds");
const seedSTDmodels = require("./stdmodel-seeds");
const seedVisit_Symptoms = require("./visit-symptoms-seeds");
const seedVisit_Treatment = require("./visit-treatment-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedSymptoms();
  await seedPatients();
  await seedDoctors();
  await seedTreatment();
  await seedVisits();
  await seedSTDmodels();
  await seedVisit_Symptoms();
  await seedVisit_Treatment();

  process.exit(0);
};

seedAll();
