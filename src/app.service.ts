import { Injectable } from '@nestjs/common';
import { GoogleSheetConnectorService } from 'nest-google-sheet-connector';

@Injectable()
export class AppService {
  constructor(
    private googleSheetConnectorService: GoogleSheetConnectorService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
}
