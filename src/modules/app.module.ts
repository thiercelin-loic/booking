import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from 'src/controllers/app.controller';
import { AppService } from 'src/services/app.service';

import { ListingsModule } from './listings.module';
import { BookingsModule } from './bookings.module';
import { ReviewsModule } from './reviews.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('MYSQL_HOST'),
        port: parseInt(configService.get('MYSQL_PORT', '3306'), 10),
        username: configService.get('MYSQL_USERNAME'),
        password: String(configService.get('MYSQL_PASSWORD') || ''),
        database: configService.get('MYSQL_DATABASE'),
        entities: [__dirname + '/../models/*.entity.{js,ts}'],
        synchronize: true,
      }),
    }),
    ListingsModule,
    BookingsModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }