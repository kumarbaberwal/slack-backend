import express from "express";
import { ENV } from "./config/env.js";

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello Kumar"
    });
})

const PORT = ENV.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})