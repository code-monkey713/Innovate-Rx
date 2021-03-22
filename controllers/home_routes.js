const router = require('express').Router();
const { Patient, Doctor, Visit, Symptom, Diagnosis, Test, Treatment, Feedback, Chat, Specialty } = require('../models');
const withAuth = require('../utils/auth');

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
  try {
    res.render('patient_login', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/doctor_login', async (req, res) => {
  try {
    res.render('doctor_login', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;