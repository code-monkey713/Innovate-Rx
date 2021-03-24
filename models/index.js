// const Chat = require('./Chat');
const Doctor = require('./Doctor');
const Diagnosis = require('./Diagnosis');
// const Feedback = require('./Feedback');
const Patient = require('./Patient');
// const Specialty = require('./Specialty');
const Symptom = require('./Symptom');
const Test = require('./Test');
const Visit = require('./Visit');
const STDmodel = require('./STDmodel');
const Visit_Symptoms = require('./Visit_Symptoms');
const Treatment = require('./Treatment');

Patient.hasMany(Visit, {
  foreignKey: 'patient_id',
  onDelete: 'cascade'
});

Visit.belongsTo(Patient, {
  foreignKey: 'patient_id',
});



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

Visit.hasMany(STDmodel,{
  foreignKey: 'visit_id',
  onDelete: 'CASCADE'
});

STDmodel.belongsTo(Visit,{
  foreignKey: 'visit_id'
});



// Visit.hasMany(Visit_Symptoms, {
//   foreignKey: 'visit_id',
// });

// STDmodel.hasMany(Visit_Symptoms, {
//   foreignKey: 'stdmodel_id',
// });

// Visit.hasMany(STDmodel, {
//   through: {
//     model: Visit_Symptoms,
//     unique:false,
//   }
// });

Visit.hasMany(Symptom, {
  foreignKey: 'visit_id',
  onDelete: 'CASCADE'
});

Symptom.belongsTo(Visit, {
  foreignKey: 'visit_id',
});






module.exports = { 
  Doctor, 
  Diagnosis, 
  Patient, 
  // Feedback, 
  // Chat, 
  // Specialty, 
  STDmodel,
  Symptom, 
  Test, 
  Treatment, 
  // Treatments, 
  Visit,
  Visit_Symptoms,
};
