const router = require("express").Router();
const { Visit_Symptoms } = require("../../models");
const bcrypt = require("bcrypt");
const { withPatientAuth } = require("../../utils/auth");

router.post("/", withPatientAuth, async (req, res) => {
  try {
    let newVisitSymptom;

    const newVisitSymptomsData = req.body;
    newVisitSymptomsData.visit_id = req.body.lastVisitId;
    newVisitSymptomsData.stdmodel_id = req.body.stdModelId;
    newVisitSymptomsData.is_positive = req.body.is_positive;

    newVisitSymptom = await Visit_Symptoms.create(newVisitSymptomsData);

    res.status(200).json(newVisitSymptom);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
