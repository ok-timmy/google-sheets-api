import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService as AppServe } from './app.service';
import { WriteCellDto } from './cell-dto/writeCell.dto';
import { ReadCellDto } from './cell-dto/readCell.dto';
import { ReadRangeDto } from './cell-dto/readRange.dto';
import { WriteRangeDto } from './cell-dto/writeRange.dto';
import { GoogleSheetConnectorService } from 'nest-google-sheet-connector/src';

@Controller()
export class AppController {
  constructor(
    private readonly appService: GoogleSheetConnectorService,
    private secondService: AppServe,
  ) {}

  @Get()
  getHello(): string {
    return this.secondService.getHello();
  }

  @Post('writeCell')
  async writeCell(@Body() writeCellDto: WriteCellDto): Promise<any> {
    const { spreadsheetId, cell, value } = writeCellDto;
    if (!spreadsheetId || !cell || !value) {
      return 'None of the values can be empty';
    }
    console.log(spreadsheetId, cell, value);
    return this.appService.writeCell(spreadsheetId, cell, value);
  }

  @Get('readCell')
  async getCell(@Body() getCellDto: ReadCellDto): Promise<any> {
    const { spreadsheetId, cell } = getCellDto;
    console.log(spreadsheetId, cell);
    //We have to change this code when it the package has been updated
    const data = await this.appService.readRange(spreadsheetId, cell);
    return data[0][0];
  }

  @Get('readRange')
  async readRange(@Body() readRangeDto: ReadRangeDto): Promise<any[][]> {
    const { spreadsheetId, range } = readRangeDto;
    return this.appService.readRange(spreadsheetId, range);
  }

  @Post('writeRange')
  async writeRange(@Body() writeRangeDto: WriteRangeDto): Promise<any> {
    const { spreadsheetId, values, range } = writeRangeDto;
    return this.appService.writeRange(spreadsheetId, range, values);
  }
}
