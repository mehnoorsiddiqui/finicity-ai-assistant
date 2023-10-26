// Import the dependencies
const express = require("express");
const cors = require('cors');
const api = require('./routes')

// Create an express server
const app = express();
const port = process.env.PORT || 8080;

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//CORS
app.use(cors({ credentials: true, origin: true }));

//Authentication flow of pnz api
app.use("/api", api);

app.get("/", (req, res) => {
    res.json({
      success: true,
      info: "Finicity API",
      status: "healthy",
      error: null,
    });
  });
  
// Start the server
app.listen(port, () => console.log(`SERVER LISTENING AT PORT ${port}`));