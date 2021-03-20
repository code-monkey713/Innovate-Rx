const Chat = require('./Chat');
const Doctor = require('./Doctor');
const Feedback = require('./Feedback');
const Patient = require('./Patient');
const Specialty = require('./Specialty');
const Test = require('./Test');
// unique table of all the different treatments given
const Treatment = require('./Treatment');
// treatments are for the many patient, doctor, treatment type given
const Treatments = require('./Treatments');
const Visit = require('./Visit');

Patient.hasMany(Test, {
  onDelete: 'cascade'
});

Patient.hasMany(Treatment, {
  // onDelete: 'cascade'
});

Patient.hasMany(Visit, {
  // onDelete: 'cascade'
});

Doctor.hasMany(Patient, {

});



module.exports = { Doctor, Patient, Feedback, Chat, Specialty, Test, Treatment, Treatments, Visit };
