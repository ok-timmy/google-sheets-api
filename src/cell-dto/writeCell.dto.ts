import { IsNotEmpty } from 'class-validator';

export class WriteCellDto {
  @IsNotEmpty()
  spreadsheetId: string;

  @IsNotEmpty()
  cell: string;

  @IsNotEmpty()
  value: any;
}
