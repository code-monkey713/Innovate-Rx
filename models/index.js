const Patient = require('./Patient');
const Doctor = require('./Doctor');
const Feedback = require('./Feedback');
const Chat = require('./Chat');
const Test = require('./Test');
const Treatment = require('./Treatment');
const Visit = require('./Visit');

Patient.hasMany(Test, {
  onDelete: 'cascade'
});

Doctor.hasMany(Patient, {
  
});

module.exports = { Doctor, Patient, Feedback, Chat, Test, Treatment, Visit };
