const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");
const c = require("config");
const axios = require("axios");
const { getJson } = require("serpapi");

require("dotenv").config();

const app = express();
app.use(cors());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Get the API key from the .env file
const API_KEY = process.env.GOOGLE_API_KEY;
const CX = process.env.GOOGLE_CX;

// console.log(CX);
// console.log(API_KEY);

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
// app.use("/api/merchant", require("./routes/merchant"));

// API for blog search
// app.post('/search', async (req, res) => {
//   const query = req.query.q;
//   const city = req.query.city;

//   try {
//     const response = await axios(
//       `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${query}+${city}`
//     );
//     res.json(response.data);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// API for blog search
app.post("/search", async (req, res) => {
  getJson(
    {
      engine: "google",
      q: "Travel itinerary for Surat",
      api_key: "960967aed76b0a976907148265b8871cb3ebfcca9372eac7ed96c0148a117c2e",
    },
    (json) => {
      res.json(json["organic_results"]);
      console.log(json["organic_results"]);
    }
  );
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
