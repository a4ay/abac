import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as path from 'node:path';


@Module({
  imports: [ConfigModule.forRoot(
    {
      isGlobal : true,
      envFilePath : path.join(process.cwd() , `${process.env?.NODE_ENV || 'development'}.env`),
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
