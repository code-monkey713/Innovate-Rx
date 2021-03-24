const sequelize = require("../config/connection");
const { 
  Diagnosis, 
  Doctor, 
  Patient,  
  Symptom, 
  STDmodel,
  Test, 
  Treatment,
  Visit,
  Visit_Symptoms,
} = require("../models");

const seedSymptoms = require("./symptom-seeds");
const seedPatients = require("./patient-seeds");
const seedDoctors = require("./doctor-seeds");
const seedDiagnosis = require("./diagnosis-seeds");
const seedTests = require("./test-seeds");
const seedTreatment = require("./treatment-seeds");
const seedVisits = require("./visit-seeds");
const seedSTDmodels = require("./stdmodel-seeds");
const seedVisit_Symptoms = require("./visit_symptoms-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedSymptoms();
  await seedPatients();
  await seedDoctors();
  await seedDiagnosis();
  await seedTests();
  await seedTreatment();
  await seedVisits();
  await seedSTDmodels();
  await seedVisit_Symptoms();

  process.exit(0);
};

seedAll();
