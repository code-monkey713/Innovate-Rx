const router = require("express").Router();
const {
  Patient,
  Doctor,
  Visit,
  Symptom,
  Diagnosis,
  Test,
  Treatment,
  Feedback,
  Chat,
  Specialty,
} = require("../../models");
const bcrypt = require("bcrypt");
const { withPatientAuth } = require("../../utils/auth");

router.get("/", (req, res) => {
  Visit.findAll({})
    // .then((console) => {
    //   console.log(console);
    // })
    .then((dbVisitData) => res.json(dbVisitData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withPatientAuth, async (req, res) => {
  try {
    const newVisitData = await Visit.create({
      ...req.body,
      patient_id: req.session.user_id,
    });

    // console.log(`New Visit: ${res}`);
    res.status(200).json(newVisitData);
  } catch (err) {
    res.status(500).json(err);
    // console.log(err)
  }
});

// router.post('')

module.exports = router;
