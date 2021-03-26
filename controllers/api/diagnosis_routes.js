const router = require('express').Router();
const { Doctor, Patient, Visit, Symptom, Diagnosis, Test, Treatment, Visit_Treatment, Visit_Symptoms, STDmodel } = require('../../models');
const bcrypt = require('bcrypt');

module.exports = router;