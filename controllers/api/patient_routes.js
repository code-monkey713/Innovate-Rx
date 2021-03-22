const router = require('express').Router();
const { Patient, Doctor, Visit, Symptom, Diagnosis, Test, Treatment, Feedback, Chat, Specialty } = require('../../models');
const bcrypt = require('bcrypt');
const withPatientAuth = require('../../utils/auth');

router.post('/patient_registration', async (req, res) => {
  try {
    res.render('patient_registration');

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;