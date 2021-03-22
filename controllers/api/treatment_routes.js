const router = require('express').Router();
const { Patient, Doctor, Visit, Symptom, Diagnosis, Test, Treatment, Visit, Feedback, Chat, Specialty } = require('../..models/');
const bcrypt = require('bcrypt');

module.exports = router;