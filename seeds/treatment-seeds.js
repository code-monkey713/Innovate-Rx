const { Treatment } = require("../models");

const treatmentData = [
  {
    name: "Tylo-NullPointerException",
    description: "This is the one cure to cure all of them."
  },
  {
    name: "The Sweeney-Todd Treatment",
    description: "This treatment is to die for! It will cure you of all your pain."
  },
  {
    name: "Inception Nuro Injection",
    description: "This treatment will leave you in an even more delusioned state of mind."
  },
  {
    name: "The Golden Magic Touch",
    description: "This treatment will not only cure you but everything you touch will be turned to gold."
  },
  {
    name: "The Get Out of My Face Treatment",
    description: "The patient will be cured but not without lots of attitude."
  },
  {
    name: "Just Don't Go to Sleep",
    description: "This treatment may be the last resort but you will have a nice sleep to cure your diagnosis."
  },
];

const seedTreatment = () => Treatment.bulkCreate(treatmentData);

module.exports = seedTreatment;
