const { Doctor } = require("../models");

const doctorData = [
  {
    intro: "Dr. Lecter is a world renowed nutritionist and has great expertise taking care of the elderly and the infirm. His motto is 'You are what you eat!'.",
    first_name: "Hannibal",
    last_name: "Lecter",
    email: "hlecter@email.com",
    password: "password1",
  }, 
  {
    intro: "coming soon",
    first_name: "Steven",
    last_name: "Strange",
    email: "sstrange@email.com",
    password: "password1",
  }, 
  {
    intro: "coming soon",
    first_name: "Greg",
    last_name: "House",
    email: "ghouse@email.com",
    password: "password1",
  }, 
  {
    intro: "coming soon",
    first_name: "Doogie",
    last_name: "Howser",
    email: "dhowser@email.com",
    password: "password1",
  }, 
  {
    intro: "coming soon",
    first_name: "Yury",
    last_name: "Zhivago",
    email: "yzhivago@email.com",
    password: "password1",
  }, 
];

const seedDoctors = () => Doctor.bulkCreate(doctorData);

module.exports = seedDoctors;
