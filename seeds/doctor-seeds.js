const { Doctor } = require("../models");

const doctorData = [
  {
    intro:
      "Dr. Lecter is a world renowned nutritionist and has great expertise taking care of the elderly and the infirm. His motto is 'You are what you eat!'.",
    first_name: "Hannibal",
    last_name: "Lecter",
    email: "hlecter@email.com",
    password: "$2b$10$tvzvXciQ/ia4RzL4228Ag.Bp/JEAVSD0dcdUZYPJWNhW7wzZm2VwK",
    image: "../images/lecter.jpeg",
  },
  {
    intro:
      "Dr. Strange is a highly accomplished neurosurgeon. He is extremely passionate about serving the community, and his patients claim he has the 'magic' touch.",
    first_name: "Steven",
    last_name: "Strange",
    email: "sstrange@email.com",
    password: "$2b$10$tvzvXciQ/ia4RzL4228Ag.Bp/JEAVSD0dcdUZYPJWNhW7wzZm2VwK",
    image: "../images/strange.png",
  },
  {
    intro:
      "A double board certified specialist in infectious disease and nephrology, Dr. House's diagnostic skills are only matched by his wit and bedside manner.",
    first_name: "Greg",
    last_name: "House",
    email: "ghouse@email.com",
    password: "$2b$10$tvzvXciQ/ia4RzL4228Ag.Bp/JEAVSD0dcdUZYPJWNhW7wzZm2VwK",
    image: "../images/house.png",
  },
  {
    intro:
      "Professor Xavier has over 40 years of experience in psychotherapy, and spent most of his life in academic dispensation. His skills have his patients convinced he can read their minds.",
    first_name: "Charles",
    last_name: "Xavier",
    email: "cxavier@email.com",
    password: "$2b$10$tvzvXciQ/ia4RzL4228Ag.Bp/JEAVSD0dcdUZYPJWNhW7wzZm2VwK",
    image: "../images/Xavier.png",
  },
  {
    intro:
      "Dr. Evil is known for his unorthodox treatment modalities like cryotherapy, which have earned him a loyal following. He has earned various monetary awards from the government for his imaginative ideas and projects.",
    first_name: "Douglas",
    last_name: "Evil",
    email: "devil@email.com",
    password: "$2b$10$tvzvXciQ/ia4RzL4228Ag.Bp/JEAVSD0dcdUZYPJWNhW7wzZm2VwK",
    image: "../images/evil.png",
  },
];

const seedDoctors = () => Doctor.bulkCreate(doctorData);

module.exports = seedDoctors;
