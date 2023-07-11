import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleSheetModule } from 'nest-google-sheet-connector';
// import credentials from "../src/"


@Module({
  imports: [GoogleSheetModule.register(credentials)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
