import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 5000;

import tracksRouter from "./routes/tracks.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Rhythmic app is running");
});

app.use("/tracks", tracksRouter);

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});