// const Chat = require('./Chat');
const Doctor = require('./Doctor');
const Diagnosis = require('./Diagnosis');
// const Feedback = require('./Feedback');
const Patient = require('./Patient');
// const Specialty = require('./Specialty');
const Symptom = require('./Symptom');
// const Test = require('./Test');

// const Treatment = require('./Treatment');

// const Treatments = require('./Treatments');
// const Visit = require('./Visit');

// Patient.hasMany(Test, {
//   onDelete: 'cascade'
// });

// Patient.hasMany(Treatment, {
//   // onDelete: 'cascade'
// });

// Patient.hasMany(Visit, {
//   // onDelete: 'cascade'
// });

// Doctor.hasMany(Patient, {

// });



module.exports = { 
  Doctor, 
  Diagnosis,
  Patient, 
  // Feedback, 
  // Chat, 
  // Specialty, 
  Symptom,
  // Test, 
  // Treatment, 
  // Treatments, 
  // Visit 
};
