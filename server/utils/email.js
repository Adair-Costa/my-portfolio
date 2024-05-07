const nodemailer = require("nodemailer");

async function sendEmail(options) {
    // CREATE A TRANSPOTER
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    // DEFINE THE EMAIL OPTIONS
    const mailOptions = {
        to: process.env.MY_EMAIL,
        from: options.email,
        subject: `${options.firstName} ${options.lastName}: <${options.email}>`,
        text: options.message,
    };

    // SEND THE EMAIL
    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;
