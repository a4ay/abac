import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import * as path from 'node:path';
import { DataSource, DataSourceOptions } from 'typeorm';

config({
  path: path.join(
    process.cwd(),
    `${process.env?.NODE_ENV || 'development'}.env`,
  ),
});
const configService: ConfigService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('DB_HOST'),
  username: configService.get('DB_USER'),
  port: configService.get('DB_PORT'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource: DataSource = new DataSource(dataSourceOptions);
export default dataSource;
