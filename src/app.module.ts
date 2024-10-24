import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GoogleSheetModule } from 'nest-google-sheet-connector/src';
import credentials from './service';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    GoogleSheetModule.register(credentials),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
