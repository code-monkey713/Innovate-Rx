const router = require('express').Router();
const { PDoctor, Patient, Visit, Symptom, Diagnosis, Test, Treatment, Visit_Treatment, Visit_Symptoms, STDmodel } = require('../../models');
const bcrypt = require('bcrypt');
const { withPatientAuth } = require('../../utils/auth');

router.post('/', withPatientAuth, async (req,res) => {
  try {
    const newVisitSymptomsData = req.body;
    newVisitSymptomsData.visit_id = req.body.lastVisitId;
    newVisitSymptomsData.stdmodel_id = req.body.stdModelId;
    newVisitSymptomsData.is_positive = req.body.is_positive;
    
    const newVisitSymptom = await Visit_Symptoms.create(newVisitSymptomsData);

    console.log(newVisitSymptomsData);
    res.status(200).json(newVisitSymptomsData)
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

module.exports = router;