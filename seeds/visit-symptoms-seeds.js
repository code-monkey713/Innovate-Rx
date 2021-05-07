const { Visit_Symptoms } = require("../models");

const visitSymptomsData = [
  {
    visit_id: 1,
    stdmodel_id: 10,
    is_positive: 0,
  },
  {
    visit_id: 1,
    stdmodel_id: 8,
    is_positive: 0,
  },
  {
    visit_id: 1,
    stdmodel_id: 15,
    is_positive: 1,
  },
  {
    visit_id: 2,
    stdmodel_id: 2,
    is_positive: 1,
  },
  {
    visit_id: 2,
    stdmodel_id: 7,
    is_positive: 0,
  },
  {
    visit_id: 2,
    stdmodel_id: 12,
    is_positive: 0,
  },
  {
    visit_id: 3,
    stdmodel_id: 9,
    is_positive: 0,
  },
  {
    visit_id: 3,
    stdmodel_id: 3,
    is_positive: 0,
  },
  {
    visit_id: 3,
    stdmodel_id: 11,
    is_positive: 1,
  },
  {
    visit_id: 4,
    stdmodel_id: 10,
    is_positive: 0,
  },
  {
    visit_id: 4,
    stdmodel_id: 8,
    is_positive: 0,
  },
  {
    visit_id: 4,
    stdmodel_id: 15,
    is_positive: 1,
  },
  {
    visit_id: 5,
    stdmodel_id: 9,
    is_positive: 0,
  },
  {
    visit_id: 5,
    stdmodel_id: 8,
    is_positive: 0,
  },
  {
    visit_id: 5,
    stdmodel_id: 7,
    is_positive: 1,
  },
  {
    visit_id: 6,
    stdmodel_id: 6,
    is_positive: 0,
  },
  {
    visit_id: 6,
    stdmodel_id: 5,
    is_positive: 0,
  },
  {
    visit_id: 6,
    stdmodel_id: 4,
    is_positive: 1,
  },
  {
    visit_id: 7,
    stdmodel_id: 3,
    is_positive: 0,
  },
  {
    visit_id: 7,
    stdmodel_id: 2,
    is_positive: 0,
  },
  {
    visit_id: 7,
    stdmodel_id: 1,
    is_positive: 1,
  },
];

const seedVisit_Symptoms = () => Visit_Symptoms.bulkCreate(visitSymptomsData);

module.exports = seedVisit_Symptoms;
