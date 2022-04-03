const app = require("./index");

const connect = require("./config/db");

app.listen(3000, async()=>{
    try {
        await connect();
        console.log("Listening on Port 3000");
    } catch (error) {
        console.log(error);
    }
});