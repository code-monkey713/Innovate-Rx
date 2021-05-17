const router = require("express").Router();

const patientRoutes = require("./patient_routes");
const doctorRoutes = require("./doctor_routes");
const visitRoutes = require("./visit_routes");
const stdmodelRoutes = require("./stdmodel_routes");
const visitSymptomsRoutes = require("./visit_symptoms_routes");
const visitTreatmentRoutes = require("./visit_treatment_routes");
const feedbackRoutes = require("./patient_feedback");

router.use("/patients", patientRoutes);
router.use("/doctors", doctorRoutes);
router.use("/stdmodels", stdmodelRoutes);
router.use("/visits", visitRoutes);
router.use("/visit_symptoms", visitSymptomsRoutes);
router.use("/visit_treatment", visitTreatmentRoutes);
router.use("/feedback", feedbackRoutes);
module.exports = router;
