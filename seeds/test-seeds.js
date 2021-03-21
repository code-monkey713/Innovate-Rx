const { Test } = require("../models");

const testData = [
  {
    name: "Hydroxyprogesterone"
  },
  {
    name: "White Blood Count"
  },
  {
    name: "Ultrasound"
  },
  {
    name: "Trichomoniasis Test"
  },
  {
    name: "Thyroglobulin"
  },
  {
    name: "Suicide Risk Screening"
  },
  {
    name: "Salicylates Level"
  },
  {
    name: "Reticulocyte Count"
  },
  {
    name: "Platelet Tests"
  },
  {
    name: "Osmolality Tests"
  },
  {
    name: "Neurological Exam"
  },
  {
    name: "Mental Health Screening"
  },
  {
    name: "Legionella Tests"
  },
  {
    name: "Karyotype Genetic Test"
  },
  {
    name: "Hemoglobin Electrophoresis"
  },
  {
    name: "Differential Diagnosis"
  },
  {
    name: "Creatine Kinase"
  },
  {
    name: "Coronavirus Testing"
  },
  {
    name: "Cognitive Testing"
  },
  {
    name: "Ceruloplasmin Test"
  },
  {
    name: "Catecholamine Tests"
  },
  {
    name: "BUN (Blood Urea Nitrogen)"
  },
  {
    name: "Barium Swallow"
  },
  {
    name: "Alkaline Phosphatase"
  },
  {
    name: "Fall Risk Assessment"
  },
  {
    name: "Glaucoma Tests"
  },
  {
    name: "Lactic Acid Test"
  },
  {
    name: "Microalbumin Creatinine Ratio"
  },
];

const seedTests = () => Test.bulkCreate(testData);

module.exports = seedTests;
