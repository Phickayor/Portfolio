const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

require("dotenv").config();

const bodyparser = require("body-parser");

var nodemailer = require("nodemailer");

const cors = require("cors");
//using cors
app.use(cors());

//using body-parsers
// Body-parser middleware
// app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PSWD
  }
});

app.post("/contact", (req, res) => {
  var { mail, message } = req.body;

  var mailOptions = {
    from: mail,
    to: process.env.MAIL_USERNAME,
    subject: "Message from Portfolio",
    text: message
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.status(501).send("Couldn't send Mail");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Mail sent Successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
