const { Treatment } = require("../models");

const treatmentData = [
  {
    name: "Strange Red Liquid",
    description: "If I tell you, I'm afraid you won't even try it.",
    doctor_id: 1,
  },
  {
    name: "Silent Lamb Treatment",
    description: "Ask Clarice if the lambs have stopped screaming.",
    doctor_id: 1,
  },
  {
    name: "Dinner for Two",
    description: "Have an old friend for dinner!",
    doctor_id: 1,
  },
  {
    name: "The Census Taker Meal",
    description: "Liver with some Fava beans, and a nice chianti",
    doctor_id: 1,
  },
  {
    name: "Heart Donation",
    description:
      "Remarkable! I admire your courage. I think I'll eat your heart.",
    doctor_id: 1,
  },
  {
    name: "Mirror Dimension",
    description:
      "An invisible parallel dimension where all your symptoms go away. You still get to come back though, hopefully.",
    doctor_id: 2,
  },
  {
    name: "The Eye of Agamoto",
    description:
      "An item that will literally reverse your symptoms until you don't have them anymore. Ah the benefits of time travel!",
    doctor_id: 2,
  },
  {
    name: "Ruby Rings of Raggadorr",
    description:
      "These seven circular mandala-like bands with negate all your symptoms and negative energy. How? Magic!",
    doctor_id: 2,
  },
  {
    name: "Crimson Bands of Cyttorak",
    description:
      "These red bands from the dimension of Cyttorak will bind all your ailments and symptoms and remove them from your body. Dont ask how.",
    doctor_id: 2,
  },
  {
    name: "Winds of Watoomb",
    description:
      "Not a metaphor for Gas-X, the Whirling Winds of Watoomb can blow away any disease through magical..something..something. Look, it's wind. It blows. Trust me, I'm a doctor!",
    doctor_id: 2,
  },
  {
    name: "Tylo-NullPointerException",
    description: "This is the one cure to cure all of them.",
    doctor_id: 3,
  },
  {
    name: "Curiosity",
    description:
      "It's a great personality trait to have or develop, unless you're a cat. Since you're not a cat, it's not dangerous.",
    doctor_id: 3,
  },
  {
    name: "Oxygen Therapy",
    description:
      "Somewhere out there is a tree, tirelessly producing oxygen so you can breathe, I think you owe it some gratitude.",
    doctor_id: 3,
  },
  {
    name: "Genetic modification",
    description:
      "If your DNA was off by one percentage point, you'd be a dolphin. Go get your DNA fixed!",
    doctor_id: 3,
  },
  {
    name: "Pain Management Therapy",
    description:
      "You don't have a pain management problem. You have a pain problem... but who knows? Maybe you're too stoned to tell!",
    doctor_id: 3,
  },
  {
    name: "The Darwin Award",
    description:
      "Did you swallow something you weren't supposed to? You're in the running for the Darwin Award!",
    doctor_id: 3,
  },
  {
    name: "Telepathic Illusions",
    description:
      "You're on a beach. The sun is out with a cool breeze. You're holding a pina colada. That shark isn't real. Go take a dip in the water!",
    doctor_id: 4,
  },
  {
    name: "Mind Alteration",
    description:
      "You are not sick. You have no symptoms. You can feeling young and full of energy. Just don't go bungee jumping or skydiving.",
    doctor_id: 4,
  },
  {
    name: "Join the X-Men",
    description:
      "Come join my team of super-powered mutant heroes. You can be NauseaMan, able to throw up anytime you want! Imagine the possibilities!",
    doctor_id: 4,
  },
  {
    name: "Amnesia",
    description:
      "Can't feel what you can't remember! Short term Amnesia has helped a lot of patients with their..., um uh.. what was I talking about?",
    doctor_id: 4,
  },
  {
    name: "Mind Link",
    description:
      "Stay connected with me mentally 24/7. Talk to me, tell me about your day. I'll watch you eat, work, sleep, p... wait, this might be getting too creepy!",
    doctor_id: 4,
  },
  {
    name: "Laser Sharks",
    description:
      "They make great pets, they keep the moat around your secret layer safe, and ... well, they're Sharks With Frickin' Laser Beams Attached To Their Heads!!",
    doctor_id: 5,
  },
  {
    name: "Moon Laser",
    description:
      "Build a giant laser, point it at the White House, and soon all your symptoms will be gone!",
    doctor_id: 5,
  },
  {
    name: "Mini-Me",
    description:
      "Find a Genetecist with loose morals, pay him to clone you and create a miniature you that you can carry around and talk to and brainstorm your next big plan!",
    doctor_id: 5,
  },
  {
    name: "One Million Dollars",
    description:
      "Who says money can't buy health! Get a high paying job, win a lottery ticket, threaten the government... whatever you need to do to get ONE MILLION DOLLARS!",
    doctor_id: 5,
  },
  {
    name: "The Back Up Plan",
    description:
      "Oh heck, let's just do what we always do - hijack some nuclear weapons and hold the world hostage, Yeah? Good.",
    doctor_id: 5,
  },
];

const seedTreatment = () => Treatment.bulkCreate(treatmentData);

module.exports = seedTreatment;
