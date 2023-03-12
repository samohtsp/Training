const express = require("express");
const path = require("path");
const webpack = require("webpack");

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html");
const config = require("../../webpack.prod.config.js");
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(express.static(DIST_DIR));
app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
