const fs = require("fs");
  
// STEP 1: Reading JSON file
const users = require("./banco.json");
   
// Defining new produto
let produto = {
    name: "whisk",
    volume: 100,
};
   
// STEP 2: Adding new data to users object
users.push(produto);
   
// STEP 3: Writing to a file
fs.writeFile("banco.json", JSON.stringify(users), err => {
     
    // Checking for errors
    if (err) throw err; 
   
    console.log("Done writing"); // Success
});