const router = require("express").Router();
const {
  Doctor, Patient, Visit, Symptom, Diagnosis, Test, Treatment, Visit_Treatment, Visit_Symptoms, STDmodel
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

    res.status(200).json(newVisitData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req,res) => {
  try {
      const editVisit = await Visit.update(req.body, {
          where: {
              id: req.params.id,
          },
      });

      if(!editVisit){
          res.status(404).json('No Visit found')
      }

      res.status(200).json(editVisit);
      console.log(editVisit)
  } catch (err) {
      res.status(500).json(err);
      console.log(err)
  }
})

module.exports = router;
