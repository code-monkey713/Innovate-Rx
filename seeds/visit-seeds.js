const { Visit } = require("../models");

const visitData = [
  {
    date_visited: "3-18-2021",
    patient_id: 1,
    test_id: 10,
    diagnosis_id: 5,
    doctor_id: 1,
  },
  {
    date_visited: "3-19-2021",
    patient_id: 2,
    test_id: 8,
    diagnosis_id: 2,
    doctor_id: 5,
  },
  {
    date_visited: "3-19-2021",
    patient_id: 3,
    test_id: 15,
    diagnosis_id: 17,
    doctor_id: 2,
  },
  {
    date_visited: "3-19-2021",
    patient_id: 4,
    test_id: 17,
    diagnosis_id: 1,
    doctor_id: 4,
  },
  {
    date_visited: "3-19-2021",
    patient_id: 5,
    test_id: 20,
    diagnosis_id: 12,
    doctor_id: 3,
  },
  {
    date_visited: "3-20-2021",
    patient_id: 3,
    test_id: 12,
    diagnosis_id: 15,
    doctor_id: 2,
  },
  {
    date_visited: "3-20-2021",
    patient_id: 1,
    test_id: 23,
    diagnosis_id: 9,
    doctor_id: 3,
  },
];

const seedVisits = () => Visit.bulkCreate(visitData);

module.exports = seedVisits;
