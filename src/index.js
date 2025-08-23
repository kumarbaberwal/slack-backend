import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./config/inngest.js"
import chatRoutes from "./routes/chat.route.js"


const app = express();
app.use(express.json());
app.use(clerkMiddleware());
// Set up the "/api/inngest" (recommended) routes with the serve handler
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);


app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello Kumar"
    });
})

const PORT = ENV.PORT;

const startServer = async () => {
    try {
        await connectDB();
        if (ENV.NODE_ENV !== "production") {
            app.listen(PORT, () => {
                console.log(`Server is running on http://localhost:${PORT}`);
            })
        }
    } catch (error) {
        console.log("Error starting server: ", error);
        process.exit(1);
    }
}

startServer()

export default app;