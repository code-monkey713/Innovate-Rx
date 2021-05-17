const router = require("express").Router();

const { Feedback } = require("../../models");



router.post("/feedback/patientfeedback", async (req, res) => {
  const feedback=req.body; 
  try{const newfeedback=await Feedback.create({text: feedback,patient_id: req.session.user_id})

  }catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
})


router.get("/patients", async (req, res) => {
  try {
    const patientData = await Patient.findAll({
      include: [
        {
          model: Feedback,
          include: {
            model: Feedback,
            through: Feedback,
            as: "feedback",
          },
        },

      ],
    });
    res.status(200).json(patientData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});