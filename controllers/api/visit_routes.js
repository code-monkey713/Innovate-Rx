const router = require("express").Router();

const { Visit } = require("../../models");
const bcrypt = require("bcrypt");
const { withPatientAuth } = require("../../utils/auth");

router.get("/", (req, res) => {
  Visit.findAll({})
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
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const editVisit = await Visit.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!editVisit) {
      res.status(404).json("No Visit found");
    }

    res.status(200).json(editVisit);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
