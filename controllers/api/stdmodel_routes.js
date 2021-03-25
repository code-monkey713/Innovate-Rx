const router = require('express').Router();
const { Patient, Doctor, Visit, Symptom, Diagnosis, Test, Treatment, Feedback, Chat, Specialty, STDmodel } = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', async (req, res)=> {
  try { 
    const stdModelData = await STDmodel.findAll({
      // exclude: ['password']
    });
    res.status(200).json(stdModelData);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;