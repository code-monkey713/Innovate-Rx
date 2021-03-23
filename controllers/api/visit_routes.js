const router = require('express').Router();
const { Patient, Doctor, Visit, Symptom, Diagnosis, Test, Treatment, Feedback, Chat, Specialty } = require('../../models');
const bcrypt = require('bcrypt');
const { withPatientAuth } = require('../../utils/auth');

router.post('/', withPatientAuth, async (req,res) => {
  try {
    const newVisitData = await Visit.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    req.statusCode(200).json(newVisitData)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;