const router = require('express').Router();
const { Doctor, Visit, Symptom, Diagnosis, Test, Treatment} = require('../../models');
const bcrypt = require('bcrypt');
const withDoctorAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newDoctorData = req.body;
    newDoctorData.first_name = req.body.firstName,
    newDoctorData.last_name = req.body.lastName,
    newDoctorData.intro = req.body.intro;
    newDoctorData.email = req.body.email;
    newDoctorData.password = req.body.password;

    const newDoctor = await Doctor.create(newDoctorData);

    req.session.save(() => {
      req.session.isDoctor = true;
      req.session.user_id = newDoctor.id;
      req.session.loggedIn = true;

      res.status(200).json(newDoctor);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/doctor_login', async (req, res) => {
  try {

    console.log(req.body);
    const doctorData = await Doctor.findOne({ where: { email: req.body.dLoginEmail } });

    console.log(doctorData);
    
    if (!doctorData) {
      res
        .status(400)
        .json({ message: 'Login failed. Please try again!' });
      return;
    }

    if (!req.body.dLoginPassword === doctorData.password){
      res
        .status(400)
        .json({ message: 'Invalid credentials. Please try again!' });
      return;
    }
    
      req.session.save(() => {
        req.session.isDoctor = true;
        req.session.user_id = doctorData.id;
        req.session.loggedIn = true;

        res.status(200).json({ doctor: doctorData, message: 'Doctor, You are now logged in!' });
      });
    } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/doctor_logout', (req, res) => {
  if (req.session.doctor.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).json(err);
  }
});

module.exports = router;