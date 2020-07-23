const fetch = require("node-fetch");
const fs = require("fs");

const url = "https://arcane-brook-10088.herokuapp.com/companies";

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    let brands = JSON.stringify(res);
    fs.writeFile("data.json", brands, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success!");
      }
    });
  });
