const { STDmodel } = require("../models");

const STDmodelData = [
  {
    id: 1,
    symptom: "Headache",
    test: "Head CAT Scan",
    diagnosis: "Brainus Explodus",
  },
  {
    id: 2,
    symptom: "Dizziness",
    test: "Inner Ear Exam",
    diagnosis: "Roomspinitis",
  },
  {
    id: 3,
    symptom: "Vomiting",
    test: "H. pylori Screening",
    diagnosis: "Lunchus Regurgitis",
  },
  {
    id: 4,
    symptom: "Blurry Vision",
    test: "Optical Exam",
    diagnosis: "Walkus Intowallus",
  },
  {
    id: 5,
    symptom: "Runny Nose",
    test: "Sputum Analysis",
    diagnosis: "Kleenexitis",
  },
  {
    id: 6,
    symptom: "Cough",
    test: "Tonsillar Exam",
    diagnosis: "Coverus Urmouthus",
  },
  {
    id: 7,
    symptom: "High Blood Pressure",
    test: "Arteriovenous Doppler",
    diagnosis: "Stressus Inormus",
  },
  {
    id: 8,
    symptom: "High Blood Sugar",
    test: "Fasting Blood Sugar Test",
    diagnosis: "Type 2 Dia-eatus",
  },
  {
    id: 9,
    symptom: "Fever",
    test: "Corona Virus Testing",
    diagnosis: "Stayhomeitis",
  },
  {
    id: 10,
    symptom: "Back Pain",
    test: "Spine MRI",
    diagnosis: "Status Kantstandicus",
  },
  {
    id: 11,
    symptom: "Joint Pain",
    test: "Joint X-ray",
    diagnosis: "Flu in the Knees",
  },
  {
    id: 12,
    symptom: "Abdominal Pain",
    test: "Abdominal Ultrasound",
    diagnosis: "Butts and Guts",
  },
  {
    id: 13,
    symptom: "Heartburn",
    test: "Barium Swallow",
    diagnosis: "Chronic Biscuit Toxicity",
  },
  {
    id: 14,
    symptom: "Difficulty Breathing",
    test: "V/Q Scan",
    diagnosis: "Breathus Interruptus",
  },
  {
    id: 15,
    symptom: "Weakness",
    test: "Complete Blood Count (CBC)",
    diagnosis: "Noenergitis",
  },
  {
    id: 16,
    symptom: "Urinary Issues",
    test: "Urine Analysis",
    diagnosis: "Asparagitis",
  },
  {
    id: 17,
    symptom: "I see dead people",
    test: "Mental Health Screening",
    diagnosis: "Talkus Toghostus",
  },
];

const seedSTDmodels = () => STDmodel.bulkCreate(STDmodelData);

module.exports = seedSTDmodels;
