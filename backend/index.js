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
    origin: ["https://olufikayomi-jetawo.netlify.app", "http://localhost:3000"], // restrict calls to those this address
    methods: "POST" // only allow POST requests
  })
);
//using body-parsers
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});

app.post("/api", (req, res) => {
  // res.send("Fikayo");
  var info = {
    userName: req.body.username,
    userEmail: req.body.email,
    userMessage: req.body.message,
    userNumber: req.body.number,
    subject: req.body.subject
  }


  var mailOptions = {
    from: info.userEmail,
    to: process.env.MAIL_USERNAME,
    subject: info.subject,
    text: info.userMessage + "\n sent from " + info.userEmail + + userNumber + info.userName
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
      res.json({ info: "success" })
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
