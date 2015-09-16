module.exports = (app) => {
  const bodyParser = require("body-parser");

  app.set("port", 3000);
  app.set("json spaces", 4);
  app.use(bodyParser.json());
};