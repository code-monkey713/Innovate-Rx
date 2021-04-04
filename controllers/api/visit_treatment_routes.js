const router = require("express").Router();

const { Visit_Treatment } = require("../../models");
const { withDoctorAuth } = require("../../utils/auth");

router.post("/", withDoctorAuth, async (req, res) => {
  try {
    const newVisitTreatmentData = await Visit_Treatment.create({
      ...req.body,
    });

    res.status(200).json(newVisitTreatmentData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
