const router = require('express').Router();

const patientRoutes = require('./patient_routes');
const doctorRoutes = require('./doctor_routes');
const visitRoutes = require('./visit_routes');
const symptomRoutes = require('./symptom_routes');
const testRoutes = require('./test_routes');
// const treatmentRoutes = require('./treatment_routes');
const diagnosisRoutes = require('./diagnosis_routes');
const chatRoutes = require('./chat_routes');
const feedbackRoutes = require('./feedback_routes');
const specialtyRoutes = require('./specialty_routes');
const visitSymptomsRoutes = require ('./visit_symptoms_routes');
const visitTreatmentRoutes = require ('./visit_treatment_routes')


router.use('/patients', patientRoutes);
router.use('/doctors', doctorRoutes);
router.use('/visits', visitRoutes);
router.use('/symptoms', symptomRoutes);
router.use('/tests', testRoutes);
// router.use('/treatments', treatmentRoutes);
router.use('/diagnosis', diagnosisRoutes);
router.use('/chats', chatRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/specialty', specialtyRoutes);
router.use('/visit_symptoms', visitSymptomsRoutes);
router.use('/visit_treatment', visitTreatmentRoutes);

module.exports = router;