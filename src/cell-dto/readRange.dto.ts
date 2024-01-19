import { IsNotEmpty } from 'class-validator';

export class ReadRangeDto {
  @IsNotEmpty()
  spreadsheetId: string;

  @IsNotEmpty()
  range: string;
}
