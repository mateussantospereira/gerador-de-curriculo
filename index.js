const express = require("express");
const app = express();
const port = 3002;
const path = require("path");
const routes = require("./src/router/routes");

app.use(express.static(__dirname + "/views"));
app.use("/public", express.static(path.join(__dirname, "/public")));
app.use("/", routes);

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }

    console.log(`Aplicação na porta ${port}`);
});