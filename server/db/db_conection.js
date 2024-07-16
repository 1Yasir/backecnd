const mongoose = require("mongoose");
const mongodb = process.env.mongodb;


async function main() {

    return await mongoose.connect(mongodb);
}


main().
    then(() => {
        console.log("connection");
    }).catch((err) => {
        console.log("connection error", err);
    })