import { Injectable } from '@nestjs/common';
import { Transporter, createTransport } from 'nodemailer';

@Injectable()
export class EmailService {
    transporter: Transporter;

    constructor() {
        this.transporter = createTransport({
            host: 'smtp.126.com',
            port: 25,
            secure: false,
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
    }

    async sendMail({ to, subject, html }) {
        await this.transporter.sendMail({
            from: {
                name: '会议室预定系统',
                address: process.env.EMAIL_ADDRESS,
            },
            to,
            subject,
            html,
        });
    }
}
