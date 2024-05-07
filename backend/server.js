const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConfig = require("./config/db");

// Initialize Express app
const app = express();

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
});

// Define routes
const authenticationRoutes = require("./routes/authentication.routes");
const authorizationRoutes = require("./routes/authorization.routes");
const userRoutes = require("./routes/user.routes");
const textbookRoutes = require("./routes/textbook.routes");
const orderRoutes = require("./routes/order.routes");
const reportRoutes = require("./routes/report.routes");

// Use routes
app.use("/api/auth", authenticationRoutes);
app.use("/api/auth", authorizationRoutes);
app.use("/api/users", userRoutes);
app.use("/api/textbooks", textbookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reports", reportRoutes);

// Define port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
