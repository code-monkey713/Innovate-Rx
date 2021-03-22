// const Chat = require('./Chat');
const Doctor = require('./Doctor');
const Diagnosis = require('./Diagnosis');
// const Feedback = require('./Feedback');
const Patient = require('./Patient');
// const Specialty = require('./Specialty');
const Symptom = require('./Symptom');
const Test = require('./Test');
const Visit = require('./Visit');

// const Treatment = require('./Treatment');

// const Treatments = require('./Treatments');
// const Visit = require('./Visit');

// Patient.hasMany(Test, {
//   onDelete: 'cascade'
// });

// Patient.hasMany(Treatment, {
//   // onDelete: 'cascade'
// });



// Doctor.hasMany(Patient, {

// });

Patient.hasMany(Visit, {
  foreignKey: 'patient_id',
  onDelete: 'cascade'
});

Visit.belongsTo(Patient, {
  foreignKey: 'patient_id',
})

Doctor.hasMany(Visit, {
  foreignKey: 'doctor_id',
  onDelete: 'cascade'
});

Visit.belongsTo(Doctor, {
  foreignKey: 'doctor_id',
});

Patient.belongsToMany(Doctor,{
  through: {
    model: Visit,
    unique: false
  },
  as: 'patients_doctor',
});

Doctor.belongsToMany(Patient,{
  through: {
    model: Visit,
    unique: false
  },
  as: 'doctors_patient',
});



module.exports = { 
  Doctor, 
  Diagnosis, 
  Patient, 
  // Feedback, 
  // Chat, 
  // Specialty, 
  Symptom, 
  Test, 
  // Treatment, 
  // Treatments, 
  Visit 
};
