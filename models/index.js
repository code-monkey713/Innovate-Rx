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
const Visit_Treatment = require('./Visit_Treatment');



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



Visit.belongsToMany(STDmodel,{
  through: {
    model: Visit_Symptoms,
    unique: false
  },
  as: 'visits_stdmodel',
});



Visit.hasMany(Visit_Symptoms, {
  foreignKey: 'visit_id',
})

Visit_Symptoms.belongsTo(Visit, {
  foreignKey: 'visit_id'
});



STDmodel.hasMany(Visit_Symptoms, {
  foreignKey: 'stdmodel_id',
});

Visit_Symptoms.belongsTo(STDmodel, {
  foreignKey: 'stdmodel_id'
});



Doctor.hasMany(Treatment, {
  foreignKey: 'doctor_id'
})

Treatment.belongsTo(Doctor, {
  foreignKey: 'doctor_id'
});

// Visit.hasMany(Visit_Treatment, {
//   foreignKey: 'visit_id'
// })

// Visit_Treatment.belongsTo(Visit, {
//   foreignKey: 'visit_id'
// })

// Treatment.hasMany(Visit_Treatment, {
//   foreignKey: 'treatment_id'
// })

// Visit_Treatment.belongsTo(Treatment, {
//   foreignKey: 'treatment_id'
// })

Treatment.belongsToMany(Visit, {
  through: {
    model: Visit_Treatment,
    unique: false
  },
  as: 'treatment_visit'
});

Visit.belongsToMany(Treatment, {
  through: {
    model: Visit_Treatment,
    unique: false
  },
  as: 'visit_treatment'
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
  Visit_Treatment, 
  Visit,
  Visit_Symptoms,
};
