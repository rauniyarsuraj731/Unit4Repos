const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: ,
  secure: false, // true for 465, false for other ports
  auth: {
    user: ;
    pass:;
  },
});