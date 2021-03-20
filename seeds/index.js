const sequelize = require("../config/connection");
const { 
  Symptom, 
  Patient, 
  Doctor
} = require("../models");

const seedSymptoms = require("./symptom-seeds");
const seedPatients = require("./patient-seeds");
const seedDoctors = require("./doctor-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedSymptoms();
  await seedPatients();
  await seedDoctors();


  process.exit(0);
};

seedAll();
