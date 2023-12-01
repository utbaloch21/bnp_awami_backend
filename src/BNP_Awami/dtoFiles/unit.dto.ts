import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UnitDto {
  id: number;

  @IsNotEmpty({ message: 'Should not be Empty' })
  @IsString()
  unitName: string;

  @IsNotEmpty({ message: 'Should not be Empty' })
  @IsNumber()
  wardId: number;
}
