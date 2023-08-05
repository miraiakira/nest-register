import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Role } from './user/entities/role.entity';
import { Permission } from './user/entities/permission.entity';
import { RedisModule } from './redis/redis.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DATEBASE_HOST,
            port: 3308,
            username: process.env.DATEBASE_USER,
            password: process.env.DATEBASE_PASSWORD,
            database: 'meeting_room_booking_system',
            synchronize: true,
            logging: true,
            entities: [User, Role, Permission],
            poolSize: 10,
            connectorPackage: 'mysql2',
            extra: {
                authPlugin: 'sha256_password',
            },
        }),
        UserModule,
        RedisModule,
        EmailModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
