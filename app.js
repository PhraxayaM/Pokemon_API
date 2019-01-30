// Express Modules & Objects
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
const port = process.env.PORT || 3000;

//Server Start

app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})

// 2 GET ENDPOINTS (Trainer & Pokemon)
// Create JSON object pokemon associated w/ trainers

// New
// Create
// Delete
