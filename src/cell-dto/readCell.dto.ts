import { IsNotEmpty } from 'class-validator';

export class ReadCellDto {
  @IsNotEmpty()
  spreadsheetId: string;

  @IsNotEmpty()
  cell: string;
}
