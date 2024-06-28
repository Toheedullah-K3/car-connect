const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service:"gmail",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "toheedullah.bscs4453@iiu.edu.pk",
    pass: "3830316227113",
  },
});

const sendEmail = async (email, otp) => {
    

    const info = await transporter.sendMail({
        from:"toheedullah.bscs4453@iiu.edu.pk",
        to: email,
        subject: "Verification for Car-Connect",
        text:" This is your Car-Connect otp " + otp,

    });
    return info;
}

module.exports = sendEmail;



