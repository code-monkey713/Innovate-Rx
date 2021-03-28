const { Patient } = require("../models");

const patientData = [
  {
    title: "Mr",
    first_name: "John",
    last_name: "Wick",
    dob: "9-1-1964",
    email: "jwick@email.com",
    password: "$2b$10$tvzvXciQ/ia4RzL4228Ag.Bp/JEAVSD0dcdUZYPJWNhW7wzZm2VwK",
    image: "./images/johnWick.jpg",
  },
  {
    title: "Mr",
    first_name: "Jason",
    last_name: "Bourne",
    dob: "9-12-1970",
    email: "jbourne@email.com",
    password: "$2b$10$tvzvXciQ/ia4RzL4228Ag.Bp/JEAVSD0dcdUZYPJWNhW7wzZm2VwK",
    image: "./images/jason-bourne.jpg",
  },
  {
    title: "Mr",
    first_name: "Jackie",
    last_name: "Chan",
    dob: "4-7-1954",
    email: "jchan@email.com",
    password: "$2b$10$tvzvXciQ/ia4RzL4228Ag.Bp/JEAVSD0dcdUZYPJWNhW7wzZm2VwK",
    image: "./images/jackieChan.jpg",
  },
  {
    title: "Mr",
    first_name: "Morgan",
    last_name: "Freeman",
    dob: "6-1-1937",
    email: "mfreeman@email.com",
    password: "$2b$10$tvzvXciQ/ia4RzL4228Ag.Bp/JEAVSD0dcdUZYPJWNhW7wzZm2VwK",
    image: "./images/morganFreeman.jpg",
  },
  {
    title: "Ms",
    first_name: "Jean",
    last_name: "Grey",
    dob: "9-1-1963",
    email: "jgrey@email.com",
    password: "$2b$10$tvzvXciQ/ia4RzL4228Ag.Bp/JEAVSD0dcdUZYPJWNhW7wzZm2VwK",
    image: "./images/jeangrey.jpg",
  },
];

const seedPatients = () => Patient.bulkCreate(patientData);

module.exports = seedPatients;
