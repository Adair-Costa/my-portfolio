const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const sendEmail = require("./utils/email");

const corsOptions = {
    origin: "http://localhost:5173",
};

// ENVIRONMENT VARIABLES
dotenv.config({ path: "config.env" });

// APP
const app = express();

// GLOBAL MIDDLEWARES
app.use(cors(corsOptions));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

// LOADING
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// HANDLRES AND ROUTES
app.post("/api/v1/email", async (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({
            status: "fail",
            message: "Problem sending email!",
        });
    }

    try {
        await sendEmail({
            firstName,
            lastName,
            email,
            message,
        });

        res.status(201).json({
            status: "success",
            message: "Message sent successfull!",
        });
    } catch (error) {
        console.error(error);
    }
});

// SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port: ${port}...`);
});
