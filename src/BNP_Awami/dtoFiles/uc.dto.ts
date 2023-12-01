import { IsNotEmpty, IsString } from 'class-validator';

export class UcDto {
  id: number;

  @IsNotEmpty({ message: 'Should not be Empty' })
  @IsString()
  ucName: string;
}
