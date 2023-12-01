import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class WardDto {
  id: number;

  @IsNotEmpty({ message: 'Should not be Empty' })
  @IsString()
  wardName: string;

  @IsNotEmpty({ message: 'Should not be Empty' })
  @IsNumber()
  ucId: number;
}
