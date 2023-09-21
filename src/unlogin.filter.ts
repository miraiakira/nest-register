import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

export class UnloginException extends HttpException {
  message: string;

  constructor(message?) {
    super(message, HttpStatus.UNAUTHORIZED);
    this.message = message;
  }
}

@Catch(UnloginException)
export class UnloginFilter implements ExceptionFilter {
  catch(exception: UnloginException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    response.statusCode = exception.getStatus();

    const res = exception.getResponse() as { message: string[] };

    response
      .json({
        code: HttpStatus.UNAUTHORIZED,
        message: 'fail',
        data: res?.message?.join ? res?.message?.join(',') : '用户未登录',
      })
      .end();
  }
}
