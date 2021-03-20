const { Doctor } = require("../models");

const doctorData = [
  {
    first_name: "Hannibal",
    last_name: "Lecter",
    email: "hlecter@email.com",
    password: "password1",
  }, 
  {
    first_name: "Steven",
    last_name: "Strange",
    email: "sstrange@email.com",
    password: "password1",
  }, 
  {
    first_name: "Greg",
    last_name: "House",
    email: "ghouse@email.com",
    password: "password1",
  }, 
  {
    first_name: "Doogie",
    last_name: "Howser",
    email: "dhowser@email.com",
    password: "password1",
  }, 
  {
    first_name: "Yury",
    last_name: "Zhivago",
    email: "yzhivago@email.com",
    password: "password1",
  }, 
];

const seedDoctors = () => Doctor.bulkCreate(doctorData);

module.exports = seedDoctors;
