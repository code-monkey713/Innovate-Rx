const router = require('express').Router();
const { Doctor, Patient, Visit, Symptom, Diagnosis, Test, Treatment, Visit_Treatment, Visit_Symptoms, STDmodel } = require('../../models');
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