import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Minio from 'minio';

@Controller('minio')
export class MinioController {
  @Inject('MINIO_CLIENT')
  private minioClient: Minio.Client;

  @Inject(ConfigService)
  private configService: ConfigService;

  @Get('presignedUrl')
  presignedPutObject(@Query('name') name: string) {
    return this.minioClient.presignedPutObject(
      this.configService.get('MINIO_BUCKET_NAME'),
      name,
      3600,
    );
  }
}
