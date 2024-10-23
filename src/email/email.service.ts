import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Transporter, createTransport } from 'nodemailer';

@Injectable()
export class EmailService {
  transporter: Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = createTransport({
      host: configService.get('NODEMAILER_HOST'),
      port: +configService.get('NODEMAILER_PORT'),
      secure: true,
      auth: {
        user: configService.get('NODEMAILER_AUTH_USER'),
        pass: configService.get('NODEMAILER_AUTH_PASS'),
      },
    });
  }

  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: '会议室预定系统',
        address: this.configService.get('NODEMAILER_AUTH_USER'),
      },
      to,
      subject,
      html,
    });
  }
}
