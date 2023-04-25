const express = require("express");
const axios = require("axios");
// function to get the data from the API 
let getFacts = async () => {
let response = await axios(`https://rapidapi.com/KegenGuyll/api/dad-jokes`);
// let response = await axios(`https://catfacts.ninja/facts`);
return response;
};
//controller function 
module.exports = async (req, res) => {
let responseDads = await getFacts();
res.send(responseDads.data.fact);
};