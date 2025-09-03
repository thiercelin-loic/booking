import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const DatabaseProvider = TypeOrmModule.forRootAsync({
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
});