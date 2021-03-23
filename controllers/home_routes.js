const router = require('express').Router();
const { Patient, Doctor, Visit, Symptom, Diagnosis, Test, Treatment, Feedback, Chat, Specialty } = require('../models');
const { withPatientAuth, withDoctorAuth } = require('../utils/auth');


//temporary route to get all patients in insomnia//
router.get('/patients', async (req, res) => {
  try {
    const patientData = await Patient.findAll({
      include: [{
        model: Visit,
      },{
        model: Doctor,
        through: Visit,
        as: 'patients_doctor'
      }],
    });
    res.status(200).json(patientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//temporary route to get all doctors in insomnia//
router.get('/doctors', async (req, res) => {
  try {
    const doctorsData = await Doctor.findAll({
      include: [{
        model: Visit,
      },{
        model: Patient,
        through: Visit,
        as: 'doctors_patient'
      }],
    });
    res.status(200).json(doctorsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req,res) => {
  try{
    res.redirect('/home');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/home', async (req, res) => {
  try {
    res.render('home', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/patient_registration', async (req, res) => {
  try {
    res.render('patient_registration', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/patient_login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/patient_dashboard');
  }
  res.render('patient_login');
});

router.get('/patient_dashboard', withPatientAuth, async (req, res) => {
  try {
    const patientData = await Patient.findByPk(req.session.user_id, {
      attributes: {exclude: ['password'] },
      include: [
        { 
          model: Visit,
          include: [
            {
              model: Doctor,
              attributes: ['last_name']
            }
          ]
        }],
    });

    const patient = patientData.get({ plain: true });

    res.render('patient_dashboard', {
      ...patient, 
      loggedIn: true 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/doctor_login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/doctor_dashboard');
  }
  res.render('doctor_login');
});

router.get('/doctor_dashboard', withDoctorAuth, async (req, res) => {
  try {
    const doctorData = await Doctor.findByPk(req.session.user_id, {
      attributes: {exclude: ['password'] },
      include: [
        { 
          model: Visit,
        }],
    });

    const doctor = doctorData.get({ plain: true });

    res.render('doctor_dashboard', {
      ...doctor, 
      loggedIn: true 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;