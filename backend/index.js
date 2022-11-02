const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

require("dotenv").config();

const bodyparser = require("body-parser");

var nodemailer = require("nodemailer");

const cors = require("cors");
//using cors
app.use(
  cors({
    origin: "http://localhost:3000", // restrict calls to those this address
    methods: "POST" // only allow POST requests
  })
);
//using body-parser
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.post("/api", (req, res) => {
  var userName = req.body.username;
  var userEmail = req.body.email;
  var userMessage = req.body.message;
  // res.json({ message: "Fikayo", name: "sam" });
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  var mailOptions = {
    from: userEmail,
    to: "jetawof@gmail.com",
    subject: userName + " sending Email from Portfolio",
    text: userMessage + "\n sent from " + userEmail
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello World!");
//     console.log("Server is now running");
//   })
//   .listen(3001);
