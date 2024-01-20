// Import necessary libraries
const express = require('express');
const app = express();
const port = 3000;

// Create the getGreeting function
function getGreeting(req, res) {
    const query = `select * from carrinho where id = ${req.params.id}`;
    console.log(query)
    res.send("oi");
}

// Define the "greetUser" endpoint
app.get('/', getGreeting);
app.get('/carrinho/:id', getGreeting);

// Start the server
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});