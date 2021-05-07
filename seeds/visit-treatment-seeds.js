const { Visit_Treatment } = require("../models");

const visitTreatmentData = [
  {
    visit_id: 1,
    treatment_id: 3,
  },
  {
    visit_id: 2,
    treatment_id: 24,
  },
  {
    visit_id: 3,
    treatment_id: 7,
  },
  {
    visit_id: 4,
    treatment_id: 20,
  },
  {
    visit_id: 5,
    treatment_id: 12,
  },
  {
    visit_id: 6,
    treatment_id: 8,
  },
  {
    visit_id: 7,
    treatment_id: 16,
  },
];

const seedVisitTreatments = () => Visit_Treatment.bulkCreate(visitTreatmentData);

module.exports = seedVisitTreatments;
