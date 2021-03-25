const router = require('express').Router();
const { Patient, Doctor, Visit, Symptom, Diagnosis, Test, Treatment, Feedback, Chat, Specialty } = require('../../models');
const bcrypt = require('bcrypt');
const withPatientAuth = require('../../utils/auth');



module.exports = router;