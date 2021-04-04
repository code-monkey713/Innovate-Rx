const router = require("express").Router();

const { Patient } = require("../../models");
const bcrypt = require("bcrypt");
const withPatientAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    const newPatientData = req.body;
    (newPatientData.first_name = req.body.firstName),
      (newPatientData.last_name = req.body.lastName),
      (newPatientData.dob = req.body.birthDate);
    newPatientData.title = req.body.title;
    newPatientData.email = req.body.email;
    newPatientData.password = await bcrypt.hash(req.body.password, 10);

    const newPatient = await Patient.create(newPatientData);

    req.session.save(() => {
      req.session.user_id = newPatient.id;
      req.session.loggedIn = true;

      res.status(200).json(newPatient);
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

router.post("/patient_login", async (req, res) => {
  try {
    const patientData = await Patient.findOne({
      where: { email: req.body.email },
    });

    if (!patientData) {
      res.status(400).json({ message: "Login failed. Please try again!" });
      return;
    }

    const validPassword = await bcrypt.compareSync(
      req.body.password,
      patientData.password
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Invalid credentials. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.isDoctor = false;
      req.session.user_id = patientData.id;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ patient: patientData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/patient_logout", (req, res) => {
  try {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const editPatient = await Patient.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!editPatient) {
      res.status(404).json("No Patient found");
    }

    res.status(200).json(editPatient);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
