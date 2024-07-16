const mongoose = require("mongoose");

async function main() {

    return await mongoose.connect("mongodb://localhost:27017/youtube");
}


main().
    then(() => {
        console.log("connection");
    }).catch((err) => {
        console.log("connection error", err);
    })