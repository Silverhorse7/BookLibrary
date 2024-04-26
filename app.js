const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const expressStaticGzip = require("express-static-gzip");
const routes = require("./routes");

const app = express();

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "POST, GET, OPTIONS, PUT, DELETE, HEAD"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept, x-access-token"
    );
    next();
  });
}

app.use(
  "/",
  expressStaticGzip(path.join(path.dirname(__dirname), "client"), {
    enableBrotli: true,
    customCompressions: [
      {
        encodingName: "deflate",
        fileExtension: "zz",
      },
    ],
  })
);

app.use("/api/v1", routes);

/*
eslint-disable
*/
app.use((err, req, res, next) => {
  process.stderr.write(err.stack);
  res.status(500).send({
    message: "Something went wrong. Internal server error",
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
