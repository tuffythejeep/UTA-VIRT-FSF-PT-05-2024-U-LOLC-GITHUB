const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "text",
      message: "What is your name?",
      name: "nameInput",
    },
    {
      type: "text",
      message: "Where are you from?",
      name: "locationInput",
    },
    {
      type: "text",
      message: "What is your favorite hobby?",
      name: "hobbyInput",
    },
    {
      type: "text",
      message: "What is your favorite food?",
      name: "foodInput",
    },
    {
      type: "text",
      message: "Enter your GitHub Username:",
      name: "gihubInput",
    },
    {
      type: "text",
      message: "Enter your LinkedIn URL:",
      name: "linkedinInput",
    }
  ])
  .then((response) => {
fs.writeFile("index.html")
};
