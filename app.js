const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/route/film");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/api", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port} para películas.`);
});
