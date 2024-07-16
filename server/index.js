const bcrypt = require("bcrypt");


const hashingPassword = async () => {
    const password = "yasasdfg sdfg";

    const hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);

    const compare = await bcrypt.compare(password, hashedPassword);
    console.log(compare);


}

hashingPassword();