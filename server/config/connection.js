const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI ||
        "mongodb+srv://eduardopinedahu:<password>@cluster0.8azwtap.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = mongoose.connection;
