const { Symptom } = require("../models");

const symptomData = [
  {
    name: "headache"
  },
  {
    name: "blurry vision"
  },
  {
    name: "runny nose"
  },
  {
    name: "cough"
  },
  {
    name: "fever"
  },
  {
    name: "high blood pressure"
  },
  {
    name: "high blood sugar"
  },
  {
    name: "nausea"
  },
  {
    name: "vomiting"
  },
  {
    name: "back pain"
  },
  {
    name: "joint pain"
  },
  {
    name: "weakness"
  },
  {
    name: "difficulty breathing"
  },
  {
    name: "urinary issues"
  },
  {
    name: "digestive issues"
  },
  {
    name: "other"
  },
];

const seedSymptoms = () => Symptom.bulkCreate(symptomData);

module.exports = seedSymptoms;
