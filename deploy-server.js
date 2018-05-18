var express = require("express");

var app = express();

app.use("/node_modules",
    express.static("/usr/src/printpartshop/node_modules"));
app.use("/", express.static("/usr/src/printpartshop/app"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});