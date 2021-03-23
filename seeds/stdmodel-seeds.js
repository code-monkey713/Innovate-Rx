const { STDmodel } = require("../models");

const STDmodelData = [
  {
    symptom: "Headache",
    test: "Head CAT Scan",
    // diagnosis: "Brainus Explodus",
  },
  {
    symptom: "Dizziness",
    test: "Inner Ear Exam",
    // diagnosis: "Roomspinitis",
  },
  {
    symptom: "Vomiting",
    test: "H. pylori Screening",
    // diagnosis: "Lunchus Regurgitis",
  },
  {
    symptom: "Blurry Vision",
    test: "Optical Exam",
    // diagnosis: "Walkus Intowallus",
  },
  {
    symptom: "Runny Nose",
    test: "Sputum Analysis",
    // diagnosis: "Kleenexitis",
  },
  {
    symptom: "Cough",
    test: "Tonsillar Exam",
    // diagnosis: "Coverus Urmouthus",
  },
  {
    symptom: "High Blood Pressure",
    test: "Arteriovenous Doppler",
    // diagnosis: "Stressus Inormus",
  },
  {
    symptom: "High Blood Sugar",
    test: "Fasting Blood Sugar Test",
    // diagnosis: "Type 2 Dia-eatus",
  },
  {
    symptom: "Fever",
    test: "Corona Virus Testing",
    // diagnosis: "Stayhomeitis",
  },
  {
    symptom: "Back Pain",
    test: "Spine MRI",
    // diagnosis: "Status Kantstandicus",
  },
  {
    symptom: "Joint Pain",
    test: "Joint X-ray",
    // diagnosis: "Flu in the Knees",
  },
  {
    symptom: "Abdominal Pain",
    test: "Abdominal Ultrasound",
    // diagnosis: "Butts and Guts",
  },
  {
    symptom: "Heartburn",
    test: "Barium Swallow",
    // diagnosis: "Chronic Biscuit Toxicity",
  },
  {
    symptom: "Difficulty Breathing",
    test: "V/Q Scan",
    // diagnosis: "Breathus Interruptus",
  },
  {
    symptom: "Weakness",
    test: "Complete Blood Count (CBC)",
    // diagnosis: "Noenergitis",
  },
  {
    symptom: "Urinary Issues",
    test: "Urine Analysis",
    // diagnosis: "Asparagitis",
  },
  {
    symptom: "I see dead people",
    test: "Mental Health Screening",
    // diagnosis: "Talkus Toghostus",
  },
];

const seedSTDmodels = () => STDmodel.bulkCreate(STDmodelData);

module.exports = seedSTDmodels;
