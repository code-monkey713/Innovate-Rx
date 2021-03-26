const router = require('express').Router();
const { PDoctor, Patient, Visit, Symptom, Diagnosis, Test, Treatment, Visit_Treatment, Visit_Symptoms, STDmodel } = require('../../models');
const bcrypt = require('bcrypt');
const { withDoctorAuth } = require("../../utils/auth");

router.post('/', withDoctorAuth, async (req,res) => {

  console.log(req)
  try {
    const newVisitTreatmentData = await Visit_Treatment.create({
      ...req.body,
    });

    res.status(200).json(newVisitTreatmentData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
    console.log(newVisitTreatmentData);
  }
})

module.exports = router;