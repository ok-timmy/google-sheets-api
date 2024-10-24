import { Injectable } from '@nestjs/common';
import { GoogleSheetConnectorService } from 'nest-google-sheet-connector/src';
// import { JWT } from 'google-auth-library';
// import { google, sheets_v4 } from 'googleapis';
// import { GaxiosPromise } from 'googleapis-common';
// import { GoogleAuthService } from './google-sheets/google.auth.service';

@Injectable()
export class AppService {
  constructor(
    private googleSheetConnectorService: GoogleSheetConnectorService,
  ) {}

  getHello(): string {
    return 'Hi there, I am about to publish my first technical article!';
  }
}
