const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { to, subject, body } = req.body;

    // Настройте транспорт для отправки электронной почты
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Donor.Help.People.USA@gmail.com',
            pass: 'J7i+u62-io'
        }
    });

    // Настройте объект письма
    const mailOptions = {
        from: 'Donor.Help.People.USA@gmail.com',
        to: to,
        subject: subject,
        text: body
    };

    // Отправьте электронное письмо
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: 'Ошибка при отправке электронного письма' });
        }
        res.json({ success: 'Письмо успешно отправлено' });
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
