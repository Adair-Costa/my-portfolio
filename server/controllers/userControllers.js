const nodemailer = require('nodemailer');

// HANDLERS
exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Ge all users',
    });
};

exports.getUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Get one user',
    });
};

exports.createUser = async (req, res) => {
    try {
        // 1) CREATE A TRANSPORTER
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // NOTE: ACTIVATE IN GMAIL 'LESS SECURE APP' OPTION
        // APP PASSWORD

        // 2) DEFINE THE EMAIL OPTIONS
        const mailOptions = {
            from: req.body.email,
            to: process.env.EMAIL_USERNAME,
            subject: `Message from ${req.body.name}: Possible Recruter `,
            text: req.body.message
        }
        // 3) ACTUALLY SEND THE EMAIL
        await transporter.sendMail(mailOptions)

        res.status(201).json({
            status: 'success',
            message: 'Email sent to your personal email!',
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    }
};

exports.updateUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Update one users',
    });
};

exports.deleteUser = (req, res) => {
    res.status(204).json({
        status: 'success',
        message: 'Delete one users',
    });
};
