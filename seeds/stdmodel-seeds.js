const { STDmodel } = require("../models");

const STDmodelData = [
  {
    id: 1,
    name: "Headache",
    test: "Head CAT Scan",
    diagnosis: "Brainus Explodus",
  },
  {
    id: 2,
    name: "Dizziness",
    test: "Inner Ear Exam",
    diagnosis: "Roomspinitis",
  },
  {
    id: 3,
    name: "Vomiting",
    test: "H. pylori Screening",
    diagnosis: "Lunchus Regurgitis",
  },
  {
    id: 4,
    name: "Blurry Vision",
    test: "Optical Exam",
    diagnosis: "Walkus Intowallus",
  },
  {
    id: 5,
    name: "Runny Nose",
    test: "Sputum Analysis",
    diagnosis: "Kleenexitis",
  },
  {
    id: 6,
    name: "Cough",
    test: "Tonsillar Exam",
    diagnosis: "Coverus Urmouthus",
  },
  {
    id: 7,
    name: "High Blood Pressure",
    test: "Arteriovenous Doppler",
    diagnosis: "Stressus Inormus",
  },
  {
    id: 8,
    name: "High Blood Sugar",
    test: "Fasting Blood Sugar Test",
    diagnosis: "Type 2 Dia-eatus",
  },
  {
    id: 9,
    name: "Fever",
    test: "Corona Virus Testing",
    diagnosis: "Stayhomeitis",
  },
  {
    id: 10,
    name: "Back Pain",
    test: "Spine MRI",
    diagnosis: "Status Kantstandicus",
  },
  {
    id: 11,
    name: "Joint Pain",
    test: "Joint X-ray",
    diagnosis: "Flu in the Knees",
  },
  {
    id: 12,
    name: "Abdominal Pain",
    test: "Abdominal Ultrasound",
    diagnosis: "Butts and Guts",
  },
  {
    id: 13,
    name: "Heartburn",
    test: "Barium Swallow",
    diagnosis: "Chronic Biscuit Toxicity",
  },
  {
    id: 14,
    name: "Difficulty Breathing",
    test: "V/Q Scan",
    diagnosis: "Breathus Interruptus",
  },
  {
    id: 15,
    name: "Weakness",
    test: "Complete Blood Count (CBC)",
    diagnosis: "Noenergitis",
  },
  {
    id: 16,
    name: "Urinary Issues",
    test: "Urine Analysis",
    diagnosis: "Asparagitis",
  },
  {
    id: 17,
    name: "I see dead people",
    test: "Mental Health Screening",
    diagnosis: "Talkus Toghostus",
  },
];

const seedSTDmodels = () => STDmodel.bulkCreate(STDmodelData);

module.exports = seedSTDmodels;
