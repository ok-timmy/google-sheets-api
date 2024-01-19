import { IsArray, IsNotEmpty } from 'class-validator';

export class WriteRangeDto {
  @IsNotEmpty()
  spreadsheetId: string;

  @IsNotEmpty()
  range: string;

  @IsArray()
  values: any[][];
}