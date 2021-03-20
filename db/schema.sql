DROP DATABASE IF EXISTS innovateRx_db;

CREATE DATABASE innovateRx_db;
USE innovateRx_db;

CREATE TABLE doctors
(
    id int NOT NULL AUTO_INCREMENT,
	first_name varchar(30),
    last_name varchar(30),
	specialty varchar(30),
    email varchar (30), 
    passwords varchar(30,)
    PRIMARY KEY (id) 
)

CREATE TABLE patients
(
    id int NOT NULL AUTO_INCREMENT,
	first_name varchar(30),
    last_name varchar(30),
    date_of_birth varchar(30), 
    email varchar (30), 
    passwords varchar(30),
    PRIMARY KEY (id) 
)

CREATE TABLE visits
(
    id int NOT NULL AUTO_INCREMENT,
	dates,
    doctor_id int,
    patient_id int,
	PRIMARY KEY (id) 
)

CREATE TABLE test
(
    id int NOT NULL AUTO_INCREMENT,
    test_name varchar (30),
    dates, 
    test_result, 
    PRIMARY KEY (id) 
)

CREATE TABLE treatment
(
    id int NOT NULL AUTO_INCREMENT, 
    treat_name varchar (30), 
    PRIMARY KEY (id)
)

CREATE TABLE treatments
(
    id int NOT NULL AUTO_INCREMENT, 
    treat_name varchar (30), 
    PRIMARY KEY (id)
)

CREATE TABLE  chat 
(
    id int NOT NULL AUTO_INCREMENT,
    subject_id int,
)

CREATE TABLE  feedback 
(
    id int NOT NULL AUTO_INCREMENT, 
    patient_id int,
)