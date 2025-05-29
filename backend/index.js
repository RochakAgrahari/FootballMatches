const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/matches", async (req, res) => {
  try {
    const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures", {
      params: {
        next: 10,
        league: 39, // Premier League (example)
        season: 2024
      },
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
      }
    });

    const matches = response.data.response.map((fixture) => ({
      id: fixture.fixture.id,
      date: fixture.fixture.date,
      homeTeam: fixture.teams.home.name,
      awayTeam: fixture.teams.away.name,
    }));

    res.json(matches);
  } catch (error) {
    console.error("Error fetching matches:", error.message);
    res.status(500).json({ error: "Failed to fetch matches" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
