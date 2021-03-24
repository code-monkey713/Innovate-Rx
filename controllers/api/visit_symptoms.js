const router = require('express').Router();
const { Patient, Doctor, Visit, Symptom, Diagnosis, Test, Treatment, Visit_Symptoms } = require('../../models');
const bcrypt = require('bcrypt');
const { withPatientAuth } = require('../../utils/auth');

router.post('/', withPatientAuth, async (req,res) => {
  try {   
    const newVisitSymptomsData = await Visit_Symptoms.create({
    ...req.body,
    });

    console.log(newVisitSymptomsData);
    res.status(200).json(newVisitSymptomsData)
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

module.exports = router;