const { Diagnosis } = require("../models");

const diagnosisData = [
  {
    name: "Flu in the Knees",
    description: "Telling a patient they have Flu in the Knees is telling them that they have arthritis in their knees."
  },
  {
    name: "Butts and Guts",
    description: "This funny phrase refers to Gastroenterologists who often frequently work with patients when they have ailments or afflictions that affect their stomach, intestines, colon, rectum, gallbladder, and esophagus."
  },
  {
    name: "Crispy Critter",
    description: "When a healthcare professional refers to a patient as a Crispy Critter, they're referencing how they have severe burns on their body."
  },
  {
    name: "Coffin Dodger",
    description: "For those patients who narrowly avoid going to the grave, healthcare professionals will use a phrase like Coffin Dodger to let others know just how close the patient came."
  },
  {
    name: "Bloodsucker",
    description: "Oddly enough it seems like a fitting phrase because of their intimate work with collecting a patient's blood and properly storing it."
  },
  {
    name: "Bone Cracker",
    description: "Orthopedic Surgeons are responsible for treating conditions that a patient might be suffering from in relation to their bone structure, ligaments, tendons, and muscles."
  },
  {
    name: "Frequent Flyer",
    description: "When a healthcare professional refers to a patient as a Frequent Flyer, they're referring to them as someone who comes into the hospital on a regular basis."
  },
  {
    name: "Going Down The Tubes",
    description: "Much like when someone goes down a slide, they can start to ramp up how badly they're feeling really quickly — hence the name going down the tubes."
  },
  {
    name: "Hospitel",
    description: "Some patients like to abuse the system by claiming they are suffering from an illness or disease and need treatment, except they're only looking for a place to stay overnight because they have no other option."
  }, 
  {
    name: "Level 2 Drama",
    description: " A level 2 trauma center is a trauma center that can provide indefinite care for the injured patients, and can provide comprehensive care coverage in a 24 hour period."
  },
  {
    name: "Noctor",
    description: " This is another case in which this term is used in a sometimes unfriendly manner. A Noctor is a nurse who often believes or behaves like they are a Doctor."
  },
  {
    name: "Dr. Nopiate",
    description: "Dr. Nopiates are doctors who will not prescribe prescription drugs to patients under any circumstances, even in the emergency room."
  },
  {
    name: "Dump Job",
    description: "In those scenarios, a dump job might be performed. This is when a patient is transferred to another facility or hospital so the original facility doesn't have to deal with it."
  },
  {
    name: "Slasher",
    description: "In some cases, healthcare professionals will refer to some physicians and surgeons because of the sloppy work they do on their patients. These healthcare professionals tend to rush their surgeries and often do so at the expense of their patient."
  }, 
  {
    name: "Something Bad Inside",
    description: "Almost in a fit of ignorance, some healthcare professionals might say, (I don't know whats going on but they have an SBI.)"
  },
  {
    name: "Chronic Biscuit Toxicity",
    description: "It stands for referencing a patient who is really fat because they often eat a lot of food."
  },
  {
    name: "Cut and Paste",
    description: " In some healthcare procedures, a Cut and Paste phrase is used to indicate that they tried to perform procedures, and realized they couldn't do anything more to potentially assist the patient or delay the condition/ailment that was affecting them."
  },
  {
    name: "Poop Scoopers",
    description: "Luckily, they tend to only refer to one group of healthcare professionals as Poop Scoopers. One of those individuals happens to be Gastroenterologists."
  },
];

const seedDiagnosis = () => Diagnosis.bulkCreate(diagnosisData);

module.exports = seedDiagnosis;
